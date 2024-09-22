import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import NET from 'vanta/src/vanta.net';
import './styles/TeamPage.css'
import { Link } from 'react-router-dom';
import TeamCard from '../components/TeamCard';

function TeamPages() {

    useEffect(() => {
        const netEffects = NET({
            el: "#net_vanta",
            mouseControls: true,
            backgroundColor: "rgb(245, 245, 245)", // Light, off-white-like background
            color: "rgb(85, 85, 85)", // Muted gray color for the net lines
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
          });
        // el: "#net_vanta",
        // mouseControls: true,
        //   backgroundColor: "rgb(18, 35, 21)",
        //   color: "rgb(85, 221, 74)",
        // touchControls: true,
        // gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00,
        // scale: 1.00,
        // scaleMobile: 1.00
        // });
        // return () => {
        //     if (netEffects) netEffects.destroy();
        //   };
        }, []);

  return (
    <>
    <Nav />
    <section class="bg-gray-100 dark:bg-gray-900 team_section">  {/* Changed from white */}
  <div className="net_background" id="net_vanta">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 class="mb-4 text-8xl tracking-tight font-extrabold text-gray-800 dark:text-gray-100"> {/* Off-white instead of white */}
          Our team
        </h2>
        <p class="font-light text-gray-700 sm:text-xl dark:text-gray-400"> {/* Softer tone */}
          Explore the whole collection of open-source web components and elements built with utility classes.
        </p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <TeamCard name = "Annie Parker" pos = "CEO/Co-founder" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Harry" pos = "CEO" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Jese Leos" pos = "SEO & Marketing" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Joseph Mcfall" pos = "Sales" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Lana Byrd" pos = "Web Designer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Leslie Livingston" pos = "Graphic Designer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Michael Gough" pos = "React Developer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Neil Sims" pos = "Vue.js Developer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                
      </div>  
    </div>
  </div>
</section>
        {/* <section class="bg-white dark:bg-gray-900 team_section">
        <div className="net_background" id="net_vanta">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 class="mb-4 text-8xl tracking-tight font-extrabold text-off-white dark:text-white">Our team</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div> 
                <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <TeamCard name = "Annie Parker" pos = "CEO/Co-founder" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Harry" pos = "CEO" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Jese Leos" pos = "SEO & Marketing" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Joseph Mcfall" pos = "Sales" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Lana Byrd" pos = "Web Designer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Leslie Livingston" pos = "Graphic Designer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Michael Gough" pos = "React Developer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                    <TeamCard name = "Neil Sims" pos = "Vue.js Developer" img = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"/>
                </div>  
            </div>
    </div>
            </section> */}
    </>
  )
}

export default TeamPages
