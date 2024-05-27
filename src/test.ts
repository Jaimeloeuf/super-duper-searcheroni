import { createGraph } from "./createGraph";
import { search } from "./search";
import { LoremIpsum } from "lorem-ipsum";

const textGenerator = new LoremIpsum({});
const originalString = textGenerator.generateParagraphs(100000);

console.log(
  "originalString.length",
  Intl.NumberFormat().format(originalString.length)
);

console.time("create graph");
const graph = createGraph(originalString);
console.timeEnd("create graph");

function test(searchString: string) {
  console.time("query");
  const results = search(graph, searchString);
  console.timeEnd("query");
  console.log(results && results.length);
}

test("TESTERRRR");
test("lorem");
test("ipsum");
