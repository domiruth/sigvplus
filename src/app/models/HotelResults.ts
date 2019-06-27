export interface HotelResults {
    AddressLine: [];
    CityName: string;
    Code: string;
    Direction: string;
    Distance: string;
    HotelSegmentCategoryCode: string;
    LBeRoomStay: [
        {
            AgeQualifyingCode: string;
            AmountAfterTax: string;
            AmountBeforeTax: string;
            BookingCode: string;
            Count: string;
            CurrencyCode: string;
            End: string;
            EndDateWindow: string;
            GuaranteeType: string;
            Name: string;
            RoomTypeCode: string;
            Start: string;
            StartDateWindow: string;
            TextDESC: string;
            availabilityStatus: string;
            effectiveDate: string;
            expireDate: string;
            rateIndicator: string;
            ratePlanCode: string;
            roomType_Value: string;
            rph: string;
            sourceOfBusiness: string;
        }
    ];
    LGuestCount: string;
    Latitude: string;
    Longitude: string;
    PostalCode: string;
    areaID: string;
    beServices: string;
    beSession: string;
    chainCode: string;
    chainName: string;
    hotelCityCode: string;
    hotelCode: string;
    hotelCodeContext: string;
    hotelName: string;
    roomStayRPH: [];
}