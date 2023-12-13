import React, { useState } from "react";

import "./Sidebar.css";
import "./Result.css";
const Result = () => {

    const accordionBtns = document.querySelectorAll(".accordion");

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            this.classList.toggle("is-open");

            let content = this.nextElementSibling;
            console.log(content);

            if (content.style.maxHeight) {
                //this is if the accordion is open
                content.style.maxHeight = null;
            } else {
                //if the accordion is currently closed
                content.style.maxHeight = content.scrollHeight + "px";
                console.log(content.style.maxHeight);
            }
        };
    });

    return (
        <>
            <div class="card mb-2">
                <div class="card-header d-flex" id="headingOne">
                    <div className="icon px-2 py-2 my-auto"><img className="" src="/images/search.png" height="40px" width="40px"></img></div>
                    <h5 class="mb-0">
                        <button class="btn collapsed" data-bs-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapseOne">
                            <div className="h6 collapse-a">Project Overview</div>
                        </button>
                    </h5>
                </div>

                <div id="collapse2" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <button class="accordion">Website Design and Development</button>
            <div class="accordion-content">
                <p>
                    Whether you need a wordpress website, a shopify site, or a custom fullstack application, we got you! No matter what kind of website or application you need, it will be made with clean and maintable code that follows modern development standards. We also have top notch designers that can make unique designs that will make your website look different and unique. Not to mention that we also provide 24/7 website maintenance so that you get all the support you need.
                </p>
            </div>

            <h1>FAQ</h1>

<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-item-header">
      What is Web Development?
    </div>
    <div class="accordion-item-body">
      <div class="accordion-item-body-content">
        Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Result;