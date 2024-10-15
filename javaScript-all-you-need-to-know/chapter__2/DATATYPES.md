### Javascript  এ মূলত দুই ধরনের ডাটা টাইপ আছে। 
<p>1. Primitive type 2. Object type</p>

<p>Object type গঠিত হয় primitive type দিয়ে এগুলো আমরা আমাদের মন মত বানাতে পারি। আর Primitive হচ্ছে js এর নিজস্ব টাইপ। এগুলো js এর ডেভেলপাররা আমাদের দিয়ে থাকে। </p>

<p>Primitive type data এর মধ্যে রয়েছে - Number, String, Boolean</p>
<p>Object type data এর মধ্যে রয়েছে - Array, Object, Function</p>

### Numbers
<p>JS engine interger আর floating number কে একই নাম্বার ভাবে(floating). Js এ floting number store করার জন্য 64 bit আর integer স্টোর করার জন্য 54 bit থাকে। এছাড়াও আরও কিছু ডাটা টাইপ আছে যেমন - NaN এবং Infinity</p>

### Octal and Hexadecimal Numbers
<p>Hexadecimal হলো Base 16 Number system আর Octal হলো Base 8 number system. যদি আমাদের hexadecimal ব্যাবহার করতে হয় তাহলে hexadecimal এর নাম্বার এর আগে <b>0x/0X</b> বসাতে হবে। আর Octal এর নাম্বার এর আগে 0o বসাতে হবে।</p> 

### String
<p>JS এ ডাবল কোট ("") অথবা সিংগেল কোট('') এবং অবজেক্ট লিটারেল(``) এর মধ্যে যা থাকবে তাই string. এছাড়া String constructor দিয়েও string declare করা যায়।</p>

### Booleans
<p>Boolean মানে হলো true false. Conditional statement এর ক্ষেত্রে এর ব্যাবহার হয়। </p>

### Null & Undefined
<p>JS এ যদি আমরা কোন variable declare করে থাকি কিন্ত কোন value assign না করে থাকি তাহলে একে বলে undefined.অর্থাৎ, define ই করা হয় নি। </p>
<p>JS এ আমরা কোন জায়গায় একটি value চাচ্ছি কিন্তু সেটা undefined নাহ তখন আমরা একে define করতে পারি Null দ্বারা। এটা একটা special type। মূলত এটা Object এর absense এর জন্যই বেশি ব্যাবহার হয়।</p>

### Type Conversion
<p>যখন আমরা একটা ডাটা টাইপ থেকে আরেকটা ডাটা টাইপে চলে যাই একে বলে Type Conversion. Infinity কে আমরা নাম্বারে কনভার্ট করতে পারি নাহ কিন্তু string and boolean এ কনভার্ট করতে পারি। আর boolean এ কনভার্ট করলে এটা সবসময় true return করবে কারণ js infinity কে একটা নাম্বার ধরে নিয়েছে। আর number হচ্ছে truthy value.Truthy/Falsy value কিন্তু true আর false এর মতো নাহ। </p>

<p>Falsy Value: '', null, undefined, NaN, 0, -0. এগুলো সবগুলা false না হলেও JS Compailer এগুলো কে false হিসেবে treat করবে। </p>
