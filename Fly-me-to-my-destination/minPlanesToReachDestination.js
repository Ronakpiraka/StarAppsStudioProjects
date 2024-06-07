function minPlanesToReachDestination(fuelArray) {
    const n = fuelArray.length;
    if (n === 0) return -1;

    // Queue for BFS: [current_airport, planes_used]
    let queue = [[0, 1]]; 
    // Visited array to track minimum planes used to reach each airport
    let visited = Array(n).fill(Infinity);
    visited[0] = 1;

    while (queue.length > 0) {
        const [current, planesUsed] = queue.shift();

        // Calculate the range of airports we can reach from the current airport
        const maxReach = current + fuelArray[current];

        for (let next = current + 1; next <= maxReach && next < n; next++) {
            if (planesUsed + 1 < visited[next]) {
                visited[next] = planesUsed + 1;
                queue.push([next, planesUsed + 1]);
            }
        }
    }

    // If the last airport is still set to Infinity, it means it's unreachable
    return visited[n - 1] === Infinity ? -1 : visited[n - 1];
}

// Example usage:
console.log(minPlanesToReachDestination([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachDestination([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
console.log(minPlanesToReachDestination([1, 1, 1, 1, 1])); // Output: 5
console.log(minPlanesToReachDestination([2, 0, 2, 0, 1])); // Output: -1
