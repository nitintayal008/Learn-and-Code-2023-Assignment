class LaptopFactory implements DeviceFactory {
    @Override
    public Device createDevice() {
        return new Laptop();
    }
}
