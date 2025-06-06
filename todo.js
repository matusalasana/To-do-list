

//constants
const todolistinput=document.getElementById('input');
const addbtn=document.getElementById('addbtn');
const newlist=document.getElementById('newitems');
const removebtn=document.getElementById('removebtn');

function addtasks(){
    const newtodo=todolistinput.value;
    if(newtodo !==""){

        const listitem=document.createElement('p');
        newlist.className="lits";
        listitem.innerText=newtodo;
        newlist.appendChild(listitem)

        const dltbtn=document.createElement('button');
        dltbtn.innerText='X';
        dltbtn.className="dltbtns";
        newlist.appendChild(dltbtn);

        dltbtn.addEventListener('click',function(){
            newlist.appendChild(listitem).remove();
            newlist.appendChild(dltbtn).remove();
        })

        // const dltbtn=document.createElement('button');
        // dltbtn.innerText="X";







    }
    // const lists=document.createElement('li');
    
    // newlist.innerHTML=createdtodo.appendChild(lists);
}

addbtn.addEventListener('click',addtasks);

//https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/T5CPJgb9TVOQjyYG_R1Tow_61fb726363bf44e29152ceda11d56ce1_a4.png?expiry=1741132800000&hmac=ksEfKs3-h6pZ86ohppJNneZVg9xt7hN0LOT7BKT2tWQ
//Mangata and Gallo is a jewelry store that specializes in special occasions like engagements, weddings and anniversaries. The jewelry company primarily operates online and has a small storefront in Austin, Texas with an atelier attached for browsing. Mangata & Gallo's selection of jewelry is known for its high-quality and classic look. The owner, an Austin local, is well known for her jewelry designs.  

// Mariana is the owner and the lead designer of Mangata and Gallo. After graduating from design school with a specialization in diamond cutting and metal smithing, Mariana opened a store in her hometown, Austin and started to grow her business online. Mariana has always managed every aspect of the business, from jewelry design to marketing to e-commerce. However, she recently hired several artisans to help craft her designs and a young employee to help manage the company website and social media accounts.

// Download their logos here: