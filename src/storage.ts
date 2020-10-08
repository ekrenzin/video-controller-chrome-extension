type IStorage = {
    isActive: boolean;
};

const defaultStorage: IStorage = {
    isActive: true,
};


export const storage = {
    get: (): Promise<IStorage> =>
        chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
    set: (value: IStorage): Promise<void> => chrome.storage.sync.set(value),
};
