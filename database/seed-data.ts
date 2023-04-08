interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pending: Complete - Support for RFC4122 version 1, 3, 4, and 5 UUIDs',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'In-progress: Secure - Cryptographically-strong random values',
            status: 'in-progress',
            createdAt: Date.now() - 10000,
        },
        {
            description: 'Finished: Upgrading from uuid@3? Your code is probably okay, but check out Upgrading From uuid@3 for details.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}