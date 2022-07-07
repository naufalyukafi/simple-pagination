const mockResponse = {
    data: [
        {
            title: "Hello title 1"
        },
        {
            title: "Hello title 2"
        },
        {
            title: "Hello title 3"
        },
    ]
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}