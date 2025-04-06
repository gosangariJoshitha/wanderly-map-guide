
import { useState } from 'react';
import { TransportOption, BusRoute } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Bus } from "lucide-react";

interface TransportOptionsProps {
  transport: TransportOption;
}

export function TransportOptions({ transport }: TransportOptionsProps) {
  const [selectedRoute, setSelectedRoute] = useState<BusRoute | null>(
    transport.bus && transport.bus.length > 0 ? transport.bus[0] : null
  );

  return (
    <Tabs defaultValue="car">
      <TabsList className="w-full">
        <TabsTrigger value="car" className="flex-1 flex items-center justify-center gap-2">
          <Car className="h-4 w-4" />
          <span>Car/Taxi</span>
        </TabsTrigger>
        <TabsTrigger value="bus" className="flex-1 flex items-center justify-center gap-2">
          <Bus className="h-4 w-4" />
          <span>Bus Routes</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="car" className="mt-4">
        {transport.car ? (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Car/Taxi Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{transport.car}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <h3 className="font-medium text-lg">No car/taxi information available</h3>
            <p className="text-sm text-muted-foreground mt-1">Transportation data for this location is currently being updated.</p>
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="bus" className="mt-4">
        {transport.bus && transport.bus.length > 0 ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Select Starting Point</label>
              <Select onValueChange={(value) => {
                const route = transport.bus?.find(route => route.from === value) || null;
                setSelectedRoute(route);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a starting point" />
                </SelectTrigger>
                <SelectContent>
                  {transport.bus.map((route) => (
                    <SelectItem key={`${route.from}-${route.busNumber}`} value={route.from}>
                      {route.from}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {selectedRoute && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Bus Route Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bus Number:</span>
                      <span className="text-sm bg-travel-blue-100 text-travel-blue-800 px-2 py-1 rounded-md">{selectedRoute.busNumber}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">From</div>
                        <div className="font-medium">{selectedRoute.from}</div>
                      </div>
                      <div className="flex-none pt-4">
                        <div className="w-16 h-0.5 bg-travel-blue-300 relative">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-travel-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">To</div>
                        <div className="font-medium">{selectedRoute.to}</div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-xs text-gray-500 mb-1">Stops</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedRoute.stops.map((stop, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-1">
                      <div className="text-xs text-gray-500">Frequency</div>
                      <div className="text-sm">{selectedRoute.frequency}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <h3 className="font-medium text-lg">No bus routes available</h3>
            <p className="text-sm text-muted-foreground mt-1">Bus route information for this location is currently being updated.</p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
