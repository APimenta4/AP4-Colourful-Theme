interface IDevice {
  id: string;
  batteryLevel: number;
  recharge(): void;
}

class Smartphone implements IDevice {
  id: string;
  batteryLevel: number;
  private model: string;

  constructor(id: string, model: string) {
    this.id = id;
    this.model = model;
    this.batteryLevel = 100;
  }

  recharge(): void {
    this.batteryLevel = 100;
    console.log(`${this.model} is now fully charged.`);
  }

  statusReport(): string {
    return `Device ${this.id} (${this.model}): ${this.batteryLevel}%`;
  }
}

const runInventory = (devices: IDevice[]): void => {
  devices.forEach((d) => {
    if (d.batteryLevel < 20) {
      d.recharge();
    }
  });
};

const myPhone = new Smartphone("SN-990", "Pixel 8");
console.log(myPhone.statusReport());
runInventory([myPhone]);
