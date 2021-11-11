const romanToInt = function(s) {
	let sum = 0
	let indexNext
	const arrayEl = [
		{name: "I", value: 1, score: 0, trigger: ["V", "X"]},
		{name: "V", value: 5, score: 0},
		{name: "X", value: 10, score: 0, trigger: ["L", "C"]},
		{name: "L", value: 50, score: 0},
		{name: "C", value: 100, score: 0, trigger: ["D", "M"]},
		{name: "D", value: 500, score: 0},
		{name: "M", value: 1000, score: 0}
	]
	function coincidence(nextEl, arr) {
		for (let z = 0; z < arr.length; z++) {
			if (arr[z] === nextEl) {
				return arr[z]
			}
		}
	}
	function meter(next, current) {
		for (let v = 0; v < arrayEl.length; v++) {
			if (next === arrayEl[v].name) {
				return arrayEl[v].value - current.value
			}
		}
	}
	idFor: for (let i = 0; i < s.length; i++) {
		if (i === indexNext) {
			continue idFor
		}
		for (let m = 0; m < arrayEl.length; m++) {
			if (s[i] === arrayEl[m].name) {
				if (arrayEl[m].trigger && i !== s.length - 1) {
					const isTrigger = coincidence(s[i+1], arrayEl[m].trigger)
					if (isTrigger) {
						indexNext = i + 1
						sum += meter(isTrigger, arrayEl[m])
						continue idFor
					}
					sum += arrayEl[m].value
					continue idFor
				}
				sum += arrayEl[m].value
			}
		}
	}
	return sum
}

console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))