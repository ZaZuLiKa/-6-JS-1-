{
    //1)გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
    let x=87,y=65
    console.log(x+y);
}
{
    //2)გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks, დაბეჭდეთ student ის სახელი
    let student={
        firstName:"Zaza",
        lastName:"Shavardenidze",
        Age:29,
        email:"zazashavardenidze@gmail.com",
        marks:99
    };
    console.log(student.firstName)
}
{
    //3)გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
    let m=45,n=23;
    if(m>n){
        console.log(m+n)
    } else console.log(n)
    
}
{
    //4) გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !”
    // ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )
    let studentName="Zaza"
    console.log("Rise And Shine",studentName,"!")
}
{
    //5)გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა,
    // დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია 
    //მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)
    let salary=1000;
    let bonus=0;
    if(salary>=2000){
        bonus=0
    }
    else if(salary<2000){
        bonus=salary*0.1
    }
    console.log("ბონუსი:",bonus,"ლარი")
}
{
    //6) გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
    var a=23,b=a/2,c=a+b;
    console.log(c);

}
{
    //7)გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
    var Phones =["Iphone","Samsung","Pixel","Huawei","Xiaomi"]
    console.log(Phones)
}
{
    //8) დაბეჭდეთ phones მასივის ბოლო პირველი და ბოლო ელემენტი ( ცალ-ცალკე console.log ეგში)
    console.log("First:",Phones[0])
    console.log("Last:",Phones[Phones.length-1])
}

