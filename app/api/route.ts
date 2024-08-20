export async function GET() {
    const dummyData = [
        {
            id: 1,
            name: 'item 1',
            description: 'This is item 1'
        },
        {
            id: 2,
            name: 'item 2',
            description: 'This is item 2'
        },
        {
            id: 3,
            name: 'item 3',
            description: 'This is item 3'
        },
    ];

    return new Response(JSON.stringify(dummyData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}