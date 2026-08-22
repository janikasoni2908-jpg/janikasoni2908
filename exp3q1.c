/*#include<stdio.h>
int main () {
    int a,b;
    printf("Enter two number \n");
    scanf("%d,%d",&a,&b);
    if(a==b)
        printf("no.s are equal");
    
    else
        printf("not equals");
    
    return 0;

}*/


/*#include<stdio.h>
int main () {
    int n;
    printf("Enter no. \n");
    scanf("%d", &n);
    if(n>0)
        printf("Positive number");
    else
        printf("Negative no.");
    return 0;
}*/

/*#include<stdio.h>
int main () {
    int y;
    printf("Enter year \n");
    scanf("%d",&y);
    if (y%4 ==0 && y%100 != 0 || y%400==0)
        printf("The year is a leap year");
    else
        printf("The year is not a leap year");
    return 0;
}*/


/*#include<stdio.h>
int main () {
    char ch;
    printf("Enter character\n");
    scanf("%c",&ch);
    if (ch>= 'a' && ch<= 'z' || ch>='A' && ch<= 'Z' )
        printf("The given character is an alphabet");
    else
        printf("The given alphabet is not an alphabet");
    return 0;
}*/


/*#include<stdio.h>
int main () {
    int y;
    printf("Enter year\n");
    scanf("%d",&y);
    if (y%4 ==0 && y%100 != 0 || y%400==0)
        printf("The year is a leap year");
    else
        printf("The year is not a leap year");
    return 0;
}*/


/*#include<stdio.h>
int main (){
    int n;
    float A,r,l,w,h,b;
    printf("Enter choice \n");
    scanf("%d", &n);
    switch(n){
        case 1:
          printf("Enter radius \n");
          scanf("%f", &r);
          A= 3.147*r*r;
          printf("Area = %f", A);
          break;
        case 2:
          printf("Enter base and height \n");
          scanf("%f %f", &b , &h);
          A= 0.5*b*h;
          printf("Area = %f", A);
          break;
        case 3:
          printf("Enter length and width \n");
          scanf("%f %f", &l ,&w);
          A= l*w;
          printf("Area = %f", A);
          break;
    }
    return 0;
}*/

#include<stdio.h>
int main (){
    int N;
    printf("Enter number of wheels\n");
    scanf("%d", &N);
        switch(N){
            case 1: 
                printf("Unicycle");
                break;
            case 2: 
                printf("Bicycle");
                break;
            case 3: 
                printf("Tricycle");
                break;
            default:
                printf("Invalid cycle");
                break;
            }
        return 0;
        }
      

    
    


