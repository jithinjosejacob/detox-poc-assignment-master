import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { init, cleanup } from "detox";
import { detox as config } from "../../../package.json";

BeforeAll({ timeout: 60 * 1000 }, async () => {
  await init(config);
});

Before(async () => {
  if (device.getPlatform() === "android") {
    await device.reverseTcpPort(8081);
  }

  let instanceBoolean = true;

  await device.launchApp({ delete: instanceBoolean, newInstance: true });
});

AfterAll(async () => {
  await cleanup();
});
