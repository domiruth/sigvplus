export class VuelosResults {
    recommendationId: string;
    currency: string;
    totalFareAmount: string;
    totalTaxAmount: string;
    fareAmountByPassenger: string;
    taxAmountByPassenger: string;
    carrierId: string;
    plaqueadoresId: [];
    numberPassengers: string;
    pseudo: string;
    ltaxDetails: [
        {
            taxAmount: string;
            countryCode: string;
            type: string;
        }
    ];
    lSections: [
        {
        sectionId: number;
        origin: string;
        destination: string;
        departureDate: string;
        departureDateShow: string;
        bagAllowed: boolean;
        bagQuantity: number;
        lSectionGroups: [
            {
                classId: string;
                cabinId: string;
                cabinDescription: string;
                avlStatus: number;
                fareBasis: string;
                fareType: string;
                fareTypeDescription: string;
            }
        ];
        lSegments: [
            {
                segmentId: number;
                totalFlightTime: string;
                totalFlightTimeShow: string;
                dateVariation: number;
                lSegmentGroups: [
                    {
                                departureDate: string;
                                departureDateShow: string;
                                timeOfDeparture: string;
                                timeOfDepartureShow: string;
                                arrivalDate: string;
                                arrivalDateShow: string;
                                timeOfArrival: string;
                                timeOfArrivalShow: string;
                                timeWaitAirport: string;
                                dateVariation: number;
                                origin: string;
                                destination: string;
                                flightOrtrainNumber: string;
                                equipmentType: string;
                                totalFlightTime: string;
                                totalFlightTimeShow: string;
                                marketingCarrier: string;
                                carrierName: string;
                    }
                ];
            }
        ]
        }
    ];

}