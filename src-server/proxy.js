
// App Container Proxy
export class AppContainerProxy {
  constructor(address, port) {
    this.address = address;
    this.port = port;
  }
}

// Collection of App Containers
export default class AppContainers {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry;
  }
}
