// backend/TaskItem.test.js

function getTaskTitle(task) {
    return task.title;
}

function toggleStatus(task) {
    if (task.status === "open") task.status = "closed";
    else task.status = "open";
    return task;
}

// Tests Jest
describe("TaskItem backend logic", () => {
    const task = { id: 1, title: "Test", status: "open" };

    test("getTaskTitle returns title", () => {
        expect(getTaskTitle(task)).toBe("Test");
    });

    test("toggleStatus toggles 'open' to 'closed'", () => {
        const toggled = toggleStatus({ ...task });
        expect(toggled.status).toBe("closed");
    });

    test("toggleStatus toggles 'closed' to 'open'", () => {
        const toggled = toggleStatus({ ...task, status: "closed" });
        expect(toggled.status).toBe("open");
    });
});
