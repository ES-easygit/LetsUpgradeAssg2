var bio= 35; chem=60; phy=60; maths=45; eng=56;
var per=0;
var total = (bio+chem+phy+maths+eng);
//console.log(total);
per = (total/500)*100;
console.log(per);

if (per>=80 && per<=100)
{
  console.log("Grade O");
}
   else if (per>=60 && per<=79)
   {
     console.log("Grade A");
    }
     else if (per>=45 && per<=59)
     {
       console.log("Grade B");
      }
       else if(per>=35 && per<=44)
       {
         console.log("Grade C");
        }
         else
         {
           console.log("Grade D");
          }