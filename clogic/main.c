#include <mysql/mysql.h>
#include <stdio.h>
#include <stdlib.h>
#include <mupdf/fitz.h>

int main(){

    MYSQL *connection;
    connection = mysql_init(NULL);

    const char *password = getenv("PASS");
    if (password == NULL){
        printf("getenv returned NULL\n");
        exit(1);
    }

    if (connection == NULL)
    {
        printf("ERROR %u %s\n", mysql_errno(connection), mysql_error(connection));
        exit(1);
    }else if (mysql_real_connect(connection,"minicloud-db-minicloud-db.j.aivencloud.com", "avnadmin", password, "mysql", 0, NULL, 0)==NULL){
        printf("mysql_real_connect() failed\n");
        mysql_close(connection);
        exit(1);
    }

    printf("NICE");

    fz_context *ctx = fz_new_context(NULL, NULL, FZ_STORE_DEFAULT);
    if (!ctx) {
        fprintf(stderr, "Failed to create context\n");
        return 1;
    }

    fz_document *doc = fz_open_document(ctx, "test.pdf");
    if (!doc) {
        fprintf(stderr, "Failed to open document\n");
        fz_drop_context(ctx);
        return 1;
    }

    printf("NIIIIICE");

    mysql_close(connection);
    

    return 0;
}
