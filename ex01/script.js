
function calculateGrade(score) {
    if (typeof score !== "number" ||
        !Number.isFinite(score) ||
        score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (!Number.isInteger(age) ||
        age < 0 ||
        typeof hasTicket !== "boolean") {
        return false;
    }

    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

// Test calculateGrade()
console.log(calculateGrade(90));     // A
console.log(calculateGrade(89));     // B
console.log(calculateGrade(0));      // F
console.log(calculateGrade(100));    // A
console.log(calculateGrade(-5));     // Invalid score
console.log(calculateGrade("90"));   // Invalid score
console.log(calculateGrade(NaN));    // Invalid score

// Test checkAccess()
console.log(checkAccess(20, true));  // true
console.log(checkAccess(17, true));  // false
console.log(checkAccess(20, false)); // false
console.log(checkAccess(18, true));  // true
console.log(checkAccess("20", true)); // false
