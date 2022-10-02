import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import './Tabs.css'
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="container-app">
      <div className="container-Tabs">
        <ul className="nav">
          <TabNavItem
            title="Descrition"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Additional Information"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Reviws (3)"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>

        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>

            <div className="container-text">

              <div className="text-left">
                <div className="text-inside">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculous mus
                </div>
                <div className="text-inside">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </div>
              </div>
              <div className="text-right">
                <div className="text-inside">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, untricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
                </div>
              </div>

            </div>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <div className="container-text">

              <div className="text-left">
                <div className="text-inside">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculous mus
                </div>
                <div className="text-inside">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </div>
              </div>
              <div className="text-right">
                <div className="text-inside">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, untricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
                </div>
              </div>

            </div>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <div className="container-text">

              <div className="text-left">
                <div className="text-inside">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculous mus
                </div>
                <div className="text-inside">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </div>
              </div>
              <div className="text-right">
                <div className="text-inside">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, untricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
                </div>
              </div>

            </div>
          </TabContent>
        </div>
      </div>
    </div>
  );
}