import React from "react";
import { Tabs } from "@mantine/core";
import {
  IconHome,
  IconToolsKitchen2,
  IconClock,
  IconPhone,
  IconBrandInstagram,
  IconBrandFacebook,
  IconTruckDelivery,
  IconStar,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { logoVecchia } from "../../assets";

const Nav: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/main">Cardápio</Link>
      <Link to="/main">Horários</Link>
      <Link to="/main">Reservas</Link>
      <a href="https://www.ifood.com.br/delivery/porto-alegre-rs/casa-vecchia-auxiliadora/f21e8529-903f-4a1d-a220-910091ea0a7e">
        Delivery
      </a>
      <a href="https://www.ifood.com.br/delivery/porto-alegre-rs/casa-vecchia-auxiliadora/f21e8529-903f-4a1d-a220-910091ea0a7e">
        insta
      </a>
      <a href="https://www.ifood.com.br/delivery/porto-alegre-rs/casa-vecchia-auxiliadora/f21e8529-903f-4a1d-a220-910091ea0a7e">
        facebook
      </a>

      <Tabs variant="pills" defaultValue="gallery">
        <img src={logoVecchia} alt="logo casa vecchia" className="logo" />
        <Tabs.List>
          <Tabs.Tab value="gallery" icon={<IconHome size={14} />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconToolsKitchen2 size={14} />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconClock size={14} />}>
            Settings
          </Tabs.Tab>
          <Tabs.Tab value="ssss" icon={<IconPhone size={14} />}>
            Settings
          </Tabs.Tab>
          <Tabs.Tab value="aa" icon={<IconBrandInstagram size={14} />}>
            <a href="https://www.instagram.com/casavecchiars/" target="_blank">
              insta
            </a>
          </Tabs.Tab>
          <Tabs.Tab value="c" icon={<IconBrandFacebook size={14} />}>
            <a href="https://www.facebook.com/casavecchiars/" target="_blank">
              facebook
            </a>
          </Tabs.Tab>
          <Tabs.Tab value="f" icon={<IconTruckDelivery size={14} />}>
            <a
              href="https://www.ifood.com.br/delivery/porto-alegre-rs/casa-vecchia-auxiliadora/f21e8529-903f-4a1d-a220-910091ea0a7e"
              target="_blank"
            >
              delivery
            </a>
          </Tabs.Tab>
          <Tabs.Tab value="g" icon={<IconStar size={14} />}>
            <a
              href="https://www.tripadvisor.com.br/UserReviewEdit-g303546-d2365887-Casa_Vecchia-Porto_Alegre_State_of_Rio_Grande_do_Sul.html"
              target="_blank"
            >
              avelie-nos no tripadvisor
            </a>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default Nav;
