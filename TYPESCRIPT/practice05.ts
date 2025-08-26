//1
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

console.log(getFirstElement<number>([1, 2, 3, 4]));
console.log(getFirstElement<string>(["a", "b", "c"]));

//2
interface CustomStorage<K, V> {
    setItem(key: K, value: V): void;
    getItem(key: K): V | undefined;
}

class CustomStorageContainer<K, V> implements CustomStorage<K, V> {
    map = new Map<K, V>();

    getItem(key: K): V | undefined {
        return this.map.get(key);
    }

    setItem(key: K, value: V): void {
        this.map.set(key, value);
    }
}

const container = new CustomStorageContainer<string, number>();
container.setItem("test", 123);
container.setItem("test", "test");
console.log(container.getItem("test"));
