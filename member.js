function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "React", "Node"]
    }

    // Accessing object properties
    console.log(member.name); // John
    console.log(member.age); // 30
    console.log(member.skills); // ["JavaScript", "React", "Node"]

    // Accessing array elements
    console.log(member.skills[0]); // JavaScript
    console.log(member.skills[1]); // React
    console.log(member.skills[2]); // Node
}