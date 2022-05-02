#include <stdio.h>
int Resources(int process,int res[process])
{
int minResources = 0;
for (int i=0;i<process;i++){
minResources +=(res[i] - 1) + 1;
}
minResources +=1;
return minResources;

}
int main()
{
int process,res[process] ;
printf("enter the number of processes to be executed:");
scanf("%d",&process);

for (int i=0;i<process;i++){
   printf("enter the resources to complete the process %d",&i);
   scanf("%d",&res[i]);  
}

printf ("Total Resources to be allocated for exexcution without deadlock are:-\n") ;
printf ("Total Resources >=%d ", Resources(process,res));
return 0;
}