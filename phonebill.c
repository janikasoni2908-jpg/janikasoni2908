#include<stdio.h>
int main () {
    int t;
    printf("Enter time \n");
    scanf("%d",&t);
    if(t<=100){
        if(100-t>=0)
        printf("%d",t);
        else
         printf("%d", 100+8*100+10*(t-200));
    }
    else{
        if(t>100 && t<=200)
        printf("%d", 100+8*(t-100));
        else 
        printf("%d",100+8*100+10*(t-200));
    }
    return 0;
}