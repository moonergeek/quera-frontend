const text = "  first WORd seCONd woRd THIrd worD";
x = text.trim();
y = x.split(" ");

z = y.map((item) => item.toLowerCase());

for (let i = 1; i < z.length; i++) {
  z[i].splice(0, 1, z[i][0].toUpperCase());
}

console.log(z);