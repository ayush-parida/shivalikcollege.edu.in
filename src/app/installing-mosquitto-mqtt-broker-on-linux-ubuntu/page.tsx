import type { Metadata } from "next";
import { PageRenderer } from "@/components/page/PageRenderer";

const path = "/installing-mosquitto-mqtt-broker-on-linux-ubuntu";

export const metadata: Metadata = {
  title: "Installing Mosquitto Mqtt Broker On Linux Ubuntu | Shivalik College of Engineering",
  description: "Sample overview for Installing Mosquitto Mqtt Broker On Linux Ubuntu at Shivalik College of Engineering.",
};

export default function InstallingMosquittoMqttBrokerOnLinuxUbuntuPage() {
  return (
    <PageRenderer
      path={path}
      title="Installing Mosquitto Mqtt Broker On Linux Ubuntu"
      description="Sample content for Installing Mosquitto Mqtt Broker On Linux Ubuntu will be added soon."
    />
  );
}
