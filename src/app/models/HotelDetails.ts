export class HotelDetails {
    roomStayRPH: [];
    chainCode: string;
    hotelCode: string;
    hotelCityCode: string;
    hotelName: string;
    hotelCodeContext: string;
    HotelSegmentCategoryCode: string;
    chainName: string;
    areaID: string;
    Latitude: string;
    Longitude: string;
    CityName: string;
    PostalCode: string;
    Direction: string;
    Distance: string;
    Code: string;
    AddressLine: [];
    LBeRoomStay: [
        {
            roomType_Value: string;
            rph: string;
            ratePlanCode: string;
            rateIndicator: string;
            GuaranteeType: string;
            BookingCode: string;
            RoomTypeCode: string;
            Name: string;
            TextDESC: string;
            AmountBeforeTax: string;
            AmountAfterTax: string;
            CurrencyCode: string;
            AgeQualifyingCode: string;
            availabilityStatus: string;
            effectiveDate: string;
            expireDate: string;
            sourceOfBusiness: string;
            Count: string;
            Start: string;
            End: string;
            StartDateWindow: string;
            EndDateWindow: string
        }
    ];
    beServices: string;
    beSession: {
        SessionId: string;
        SecurityToken: string;
        SequenceNumber: string;
        TransactionStatusCode: string;
    }
    LGuestCount: string;
}