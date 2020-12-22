function createElement(element,className='',idName="",){
    var element = document.createElement(element);
    element.setAttribute("class",className)
    element.setAttribute("id",idName)
    return element;
}

function addHTMLContent(element,content){
    element.innerHTML = content;
    return element
}

////////////////////////////////////////////////////////////////////////
let header;
let div_1;
let div_1_p;
let cont_div_1_p;

let div_2;
let div_2_p;
let cont_div_2;

let img_1;
let p_1;
let cont_p_1;
let p_2;
let cont_p_2;

let hr;
let cont_hr;

let section;
let cont_section;

// //////////////////////////////////////////////////////////////////////
header = createElement("header")
div_1 = createElement("div","banner")
div_1_p = createElement("p","hidden")
cont_div_1_p = addHTMLContent(div_1_p,"Hello")

div_2 = createElement("div","gery-stripe")
div_2_p = createElement("p","hidden")
cont_div_2 = addHTMLContent(div_2_p,"Hello")

img_1 = createElement("img","my-img")
img_1.setAttribute("src","./photo.jpeg")

p_1 = createElement("p","title")
cont_p_1 = addHTMLContent(p_1,"Visshnnu Tejaa")

p_2 = createElement("p","title-description")
cont_p_2 = addHTMLContent(p_2,"Web Developer |  MERN Stack Developer  |  7619352192  |  chilamakurvishnu@gmail.com  |  https://github.com/visshnnu-tejaa-98")

hr = createElement("hr")

section = createElement("section")
cont_section = addHTMLContent(section,`<table class="border-table">
<tr>
    <td>
        <!-- article start -->
        <article class="">
            <div class="inline">
                <div class="icon-background"></div>
                <div class="border"></div>
                <i class="fas fa-user icon"></i> 
                <p class="sub-heading">Profile</p>
            </div>
            <p class="description">Seeking a job as to gain the more technical knowledge and give my best to the organization from my
                knowledge. Looking forwarding to gain an opportunity that will allow me to learn and master the latest
                technologies and eager to learn new technologies and deliver the goals in time.</p>
        </article>
        <!-- article end -->
    </td>
</tr>
<tr>
    <td>
        <!-- article start -->
        <article  class="description ">
            <div>
                <div class="icon-background"></div>
                <div class="border"></div>
                <i class="fas fa-flask icon"></i>
                <p class="sub-heading">Skills</p>
            </div>

            <table class="skills ">
                <tr>
                    <td colspan="2" style="text-align:center"> <b> Technical Skills</b></td>
                </tr>
                <tr>
                    <td>
                        HTML
                    </td>
                    <td>
                        <input type="range" name="" id="" class="" min="1" max="5" value="5" class="range">
                    </td>
                </tr>
                <tr>
                    <td>
                        CSS
                    </td>
                    <td>
                        <input type="range" name="" id=""  min="1" max="5" value = "5">
                    </td>
                </tr>
                <tr>
                    <td>
                        Bootstrap
                    </td>
                    <td>
                        <input type="range" name="" id="" class="" min="1" max="5" value ="4" >
                    </td>
                </tr>
                <tr>
                    <td>
                        Node Js
                    </td>
                    <td>
                        <input type="range" name="" id=""  min="1" max="5" value = "5">
                    </td>
                </tr>
                <tr>
                    <td>
                        mongo DB
                    </td>
                    <td>
                        <input type="range" name="" id="" class="" min="1" max="5"value="4" >
                    </td>
                </tr>
                <tr>
                    <td>
                        SQL
                    </td>
                    <td>
                        <input type="range" name="" id=""  min="1" max="5" value="3">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:center"> <b> Other Skills</b></td>
                </tr>
                <tr>
                    <td>
                        Project Management
                    </td>
                    <td>
                        <input type="range" name="" id="" class="" min="1" max="5" value="5">
                    </td>
                </tr>
                <tr>
                    <td>
                        Editing
                    </td>
                    <td>
                        <input type="range" name="" id=""  min="1" max="5" value = "5">
                    </td>
                </tr>
                <tr>
                    <td>
                        Business Development
                    </td>
                    <td>
                        <input type="range" name="" id="" class="" min="1" max="5" value ="4" >
                    </td>
                </tr>
                <tr>
                    <td>
                        Decession making
                    </td>
                    <td>
                        <input type="range" name="" id=""  min="1" max="5" value = "5">
                    </td>
                </tr>
            </table>
        </article>
        <!-- article end -->
    </td>
</tr>
<tr>
    <td>
        <!-- article start -->
        <article class="description">
            <div>
                <div class="icon-background"></div>
                <div class="border"></div>
                <i class="fas fa-briefcase icon"></i>
                <p class="sub-heading">Work Experience</p>
            </div>
             
            
            <p class="description"><b>Community Relations    Manager</b></p>
            <ul class="list-padding description">
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
            </ul>
        </article>
        <!-- article end -->
    </td>
</tr>
</table>

<table>
<tr>
    <td>
        <!-- article start -->
        <article class="description ">
            <div>
                <div class="icon-background"></div>
                <div class="border"></div>
                <i class="fas fa-briefcase icon"></i> 
                <p class="sub-heading">Work Experience</p>
            </div>

            <p class="description"><b>Event Manager</b></p>
            <ul class="list-padding description">
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
            </ul>
        </article>
        <!-- article end -->
    </td>
</tr>
<tr>
    <td>
        <!-- article start -->
        <article class="description">
            <div>
                <div class="icon-background"></div>
                <div class="border"></div>
                <i class="fas fa-graduation-cap icon"></i>
                <p class="sub-heading">Education</p>
            </div>
            
            
            <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aut sed soluta? Esse nihil corrupti ullam. Autem accusamus qui vel doloremque nam nisi dolorum expedita, alias commodi cumque et facilis!</p>
            <p class="description"><b>Community Relations    Manager</b></p>
            <ul class="list-padding description">
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis ducimus nobis sunt doloribus quisquam alias temporibus voluptatum reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias similique asperiores?
                </li>
            </ul>
        </article>
        <!-- article end -->
    </td>
</tr>
</table>
<div class="divider"></div>`)

//////////////////////////////////////////////////////////////////////////'




div_1.append(cont_div_1_p)
div_2.append(cont_div_2)

header.append(div_1)
header.append(div_2)
header.append(img_1)
header.append(cont_p_1)
header.append(cont_p_2)
header.append(hr)

section.append

document.body.append(header)
document.body.append(section)