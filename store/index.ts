import { create } from "zustand";
import { LocationStore, DriverStore, MarkerData } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLatitude: null,
  userLongitude: null,
  destinationAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  setUserLocation: ({ latitude, longitude, address }) => {
    set(() => ({
      userLatitude: latitude || null,
      userLongitude: longitude || null,
      userAddress: address || null,
    }));
  },
  setDestinationLocation: ({ latitude, longitude, address }) => {
    set(() => ({
      destinationLatitude: latitude || null,
      destinationLongitude: longitude || null,
      destinationAddress: address || null,
    }));
  },
}));

export const useDriverStore = create<DriverStore>((set) => ({
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driverId: number) =>
    set(() => ({ selectedDriver: driverId })),
  setDrivers: (drivers: MarkerData[]) => set(() => ({ drivers })),
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
