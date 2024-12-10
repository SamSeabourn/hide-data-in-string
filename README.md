# Hide Data In String⁠ ![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555) ![ts](https://flat.badgen.net/badge/version/0.0.5?labelColor=green&color=555555)  ![ts](https://flat.badgen.net/badge/dependecies/0?labelColor=blue&color=555555)

### 🕵 ️ About 
`hide-data-in-string` is a lightweight npm package that enables you to embed and extract portable, hidden data within strings using invisible character encoding. 
These strings are fully portable and can be sent to and extracted by other applications using this library.
By leveraging these special Unicode characters, this package ensures that data remains hidden in plain sight, making it ideal for applications that require discreet data storage or messaging within text. 
This package works with both CommonJS (CJS) and ECMAScript Modules (ESM), and includes full TypeScript support.

This is a simple example of data stenography, the practice of concealing data within non-obtrusive media, such as text or images, without altering its appearance to the human eye. With hide-data-in-string, you can apply this concept to web applications. This method ensures that your data remains hidden in plain sight, offering a stealthy solution for embedding metadata, secure messages, or tracking information in user-facing content.

##### [Staring this repo](https://github.com/SamSeabourn/hide-data-in-string) 𝕚𝕤 𝕥𝕙𝕖 𝕖𝕒𝕤𝕚𝕖𝕤𝕥 𝕨𝕒𝕪 𝕥𝕠 𝕝𝕠𝕠𝕜 𝕝𝕚𝕜𝕖 𝕒 𝕥𝕖𝕒𝕞 𝕡𝕝𝕒𝕪𝕖𝕣 𝕨𝕚𝕥𝕙𝕠𝕦𝕥 𝕒𝕔𝕥𝕦𝕒𝕝𝕝𝕪 𝕔𝕠𝕟𝕥𝕣𝕚𝕓𝕦𝕥𝕚𝕟𝕘 𝕒𝕟𝕪𝕥𝕙𝕚𝕟𝕘 ✨🧠✨ 


### 💻 Installation 
npm
```bash
npm install hide-data-in-string
```
Or, if you're using Yarn
```bash
yarn add hide-data-in-string
```

### 🚢 Usage
importing
```javascript
import { embedData, extractData, hasEmbeddedData } from 'hide-data-in-string';
```
Embedding hidden data into a string
```javascript
const text = "Hello, World!";
const hiddenMessage = "The secret is monkey";
const stringWithEmbeddedData = embedData(text, hiddenMessage
console.log(stringWithEmbeddedData);
// "Hello, World!"
```
Extracting hidden data from a string
```javascript
const extractedMessage = extractData(stringWithEmbeddedData);
console.log(extractedMessage);
// "The secret is monkey"
```
Checking for hidden data
```javascript
console.log(hasEmbeddedData(stringWithEmbeddedData));  // true
const normalString = "Hello, World!"
console.log(hasEmbeddedData(normalString));  // false
```
#
### 👽 Advanced Usage
Embedding and Extracting Complex Data (e.g., Objects)
You can also hide more complex data, such as JSON objects, within strings. This is especially useful when you need to transmit or store data in a compact, discreet form without exposing it directly.

Embedding an object into a string

First, you'll need to serialize the object into a JSON string and then embed it into your target string. Here's how you can do that:
```javascript
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "admin"
};

const text = "Important message here";
const hiddenData = JSON.stringify(user);  

const stringWithEmbeddedData = embedData(text, hiddenData);
console.log(stringWithEmbeddedData);
// "Important message here"

const extractedData = extractData(stringWithEmbeddedData);
const parsedObject = JSON.parse(extractedData);
console.log(parsedObject);
// { name: "John Doe", email: "john.doe@example.com", role: "admin" }
```

### 🚀 Use Cases
- Messaging with metadata: Embed information within text without altering its visible content.
- Data Integrity: Track changes or store metadata in strings without risking exposure.
- Privacy-Focused Applications: Hide tracking or session data in plain sight for non-invasive user identification.
- Digital Watermarking: Embed invisible markers in content for copyright or attribution purposes.
- Tracking Interactions: Store interaction data in text to monitor user behavior without cookies.
- Anti-Fraud Measures: Conceal identifiers or hashes in strings for secure verification processes.
___

**Please use hide-data-in-string resposibly. Let's keep things fair and respect privacy**





