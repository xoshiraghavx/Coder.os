const Questions = () => {
  [
    [
        {
          "videourl": "https://youtu.be/5Km3utixwZs",
          "Category": "Binary",
          "Name": "Number of 1 Bits",
          "Link": "https://leetcode.com/problems/number-of-1-bits/",
          "Id": 12,
          "Level": "easy",
          "problem": "<p>Write a function that takes an unsigned integer and returns the number of &#39;1&#39; bits it has (also known as the <a href=\"http://en.wikipedia.org/wiki/Hamming_weight\" target=\"_blank\">Hamming weight</a>).</p>\n\n<p><strong>Note:</strong></p>\n\n<ul>\n\t<li>Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer&#39;s internal binary representation is the same, whether it is signed or unsigned.</li>\n\t<li>In Java, the compiler represents the signed integers using <a href=\"https://en.wikipedia.org/wiki/Two%27s_complement\" target=\"_blank\">2&#39;s complement notation</a>. Therefore, in <strong class=\"example\">Example 3</strong>, the input represents the signed integer. <code>-3</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 00000000000000000000000000001011\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The input binary string <strong>00000000000000000000000000001011</strong> has a total of three &#39;1&#39; bits.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 00000000000000000000000010000000\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The input binary string <strong>00000000000000000000000010000000</strong> has a total of one &#39;1&#39; bit.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 11111111111111111111111111111101\n<strong>Output:</strong> 31\n<strong>Explanation:</strong> The input binary string <strong>11111111111111111111111111111101</strong> has a total of thirty one &#39;1&#39; bits.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The input must be a <strong>binary string</strong> of length <code>32</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow up:</strong> If this function is called many times, how would you optimize it?"
        },
        {
          "videourl": "https://youtu.be/nIVW4P8b1VA",
          "Category": "Arrays",
          "Name": "Find Minimum in Rotated Sorted Array",
          "Link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
          "Id": 7,
          "Level": "medium",
          "problem": "<p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,2,4,5,6,7]</code> might become:</p>\n\n<ul>\n\t<li><code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.</li>\n\t<li><code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.</li>\n</ul>\n\n<p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p>\n\n<p>Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.</p>\n\n<p>You must write an algorithm that runs in&nbsp;<code>O(log n) time.</code></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,4,5,1,2]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The original array was [1,2,3,4,5] rotated 3 times.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [4,5,6,7,0,1,2]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [11,13,15,17]\n<strong>Output:</strong> 11\n<strong>Explanation:</strong> The original array was [11,13,15,17] and it was rotated 4 times. \n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 5000</code></li>\n\t<li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li>\n\t<li>All the integers of <code>nums</code> are <strong>unique</strong>.</li>\n\t<li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/lXVy6YWFcRM",
          "Category": "Arrays",
          "Name": "Maximum Product Subarray",
          "Link": "https://leetcode.com/problems/maximum-product-subarray/",
          "Id": 6,
          "Level": "medium",
          "problem": "<p>Given an integer array <code>nums</code>, find a <span data-keyword=\"subarray-nonempty\">subarray</span> that has the largest product, and return <em>the product</em>.</p>\n\n<p>The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,-2,4]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> [2,3] has the largest product 6.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-2,0,-1]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> The result cannot be 2, because [-2,-1] is not a subarray.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>\n\t<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>\n\t<li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/gVUrDV4tZfY",
          "Category": "Binary",
          "Name": "Sum of Two Integers",
          "Link": "https://leetcode.com/problems/sum-of-two-integers/",
          "Id": 11,
          "Level": "easy",
          "problem": "<p>Given two integers <code>a</code> and <code>b</code>, return <em>the sum of the two integers without using the operators</em> <code>+</code> <em>and</em> <code>-</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> a = 1, b = 2\n<strong>Output:</strong> 3\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> a = 2, b = 3\n<strong>Output:</strong> 5\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>-1000 &lt;= a, b &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/UuiTKBwPgAo",
          "Category": "Arrays",
          "Name": "Container With Most Water",
          "Link": "https://leetcode.com/problems/container-with-most-water/",
          "Id": 10,
          "Level": "medium",
          "problem": "<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>\n\n<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>\n\n<p>Return <em>the maximum amount of water a container can store</em>.</p>\n\n<p><strong>Notice</strong> that you may not slant the container.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg\" style=\"width: 600px; height: 287px;\" />\n<pre>\n<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]\n<strong>Output:</strong> 49\n<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> height = [1,1]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == height.length</code></li>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/6aEyTjOwlJU",
          "Category": "Dynamic Programming",
          "Name": "Decode Ways",
          "Link": "https://leetcode.com/problems/decode-ways/",
          "Id": 24,
          "Level": "medium",
          "problem": "<p>A message containing letters from <code>A-Z</code> can be <strong>encoded</strong> into numbers using the following mapping:</p>\n\n<pre>\n&#39;A&#39; -&gt; &quot;1&quot;\n&#39;B&#39; -&gt; &quot;2&quot;\n...\n&#39;Z&#39; -&gt; &quot;26&quot;\n</pre>\n\n<p>To <strong>decode</strong> an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, <code>&quot;11106&quot;</code> can be mapped into:</p>\n\n<ul>\n\t<li><code>&quot;AAJF&quot;</code> with the grouping <code>(1 1 10 6)</code></li>\n\t<li><code>&quot;KJF&quot;</code> with the grouping <code>(11 10 6)</code></li>\n</ul>\n\n<p>Note that the grouping <code>(1 11 06)</code> is invalid because <code>&quot;06&quot;</code> cannot be mapped into <code>&#39;F&#39;</code> since <code>&quot;6&quot;</code> is different from <code>&quot;06&quot;</code>.</p>\n\n<p>Given a string <code>s</code> containing only digits, return <em>the <strong>number</strong> of ways to <strong>decode</strong> it</em>.</p>\n\n<p>The test cases are generated so that the answer fits in a <strong>32-bit</strong> integer.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;12&quot;\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> &quot;12&quot; could be decoded as &quot;AB&quot; (1 2) or &quot;L&quot; (12).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;226&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> &quot;226&quot; could be decoded as &quot;BZ&quot; (2 26), &quot;VF&quot; (22 6), or &quot;BBF&quot; (2 2 6).\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;06&quot;\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> &quot;06&quot; cannot be mapped to &quot;F&quot; because of the leading zero (&quot;6&quot; is different from &quot;06&quot;).\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 100</code></li>\n\t<li><code>s</code> contains only digits and may contain leading zero(s).</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/s-VkcjHqkGI",
          "Category": "Graph",
          "Name": "Pacific Atlantic Water Flow",
          "Link": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
          "Id": 29,
          "Level": "medium",
          "problem": "<p>There is an <code>m x n</code> rectangular island that borders both the <strong>Pacific Ocean</strong> and <strong>Atlantic Ocean</strong>. The <strong>Pacific Ocean</strong> touches the island&#39;s left and top edges, and the <strong>Atlantic Ocean</strong> touches the island&#39;s right and bottom edges.</p>\n\n<p>The island is partitioned into a grid of square cells. You are given an <code>m x n</code> integer matrix <code>heights</code> where <code>heights[r][c]</code> represents the <strong>height above sea level</strong> of the cell at coordinate <code>(r, c)</code>.</p>\n\n<p>The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell&#39;s height is <strong>less than or equal to</strong> the current cell&#39;s height. Water can flow from any cell adjacent to an ocean into the ocean.</p>\n\n<p>Return <em>a <strong>2D list</strong> of grid coordinates </em><code>result</code><em> where </em><code>result[i] = [r<sub>i</sub>, c<sub>i</sub>]</code><em> denotes that rain water can flow from cell </em><code>(r<sub>i</sub>, c<sub>i</sub>)</code><em> to <strong>both</strong> the Pacific and Atlantic oceans</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg\" style=\"width: 400px; height: 400px;\" />\n<pre>\n<strong>Input:</strong> heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\n<strong>Output:</strong> [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n<strong>Explanation:</strong> The following cells can flow to the Pacific and Atlantic oceans, as shown below:\n[0,4]: [0,4] -&gt; Pacific Ocean \n&nbsp;      [0,4] -&gt; Atlantic Ocean\n[1,3]: [1,3] -&gt; [0,3] -&gt; Pacific Ocean \n&nbsp;      [1,3] -&gt; [1,4] -&gt; Atlantic Ocean\n[1,4]: [1,4] -&gt; [1,3] -&gt; [0,3] -&gt; Pacific Ocean \n&nbsp;      [1,4] -&gt; Atlantic Ocean\n[2,2]: [2,2] -&gt; [1,2] -&gt; [0,2] -&gt; Pacific Ocean \n&nbsp;      [2,2] -&gt; [2,3] -&gt; [2,4] -&gt; Atlantic Ocean\n[3,0]: [3,0] -&gt; Pacific Ocean \n&nbsp;      [3,0] -&gt; [4,0] -&gt; Atlantic Ocean\n[3,1]: [3,1] -&gt; [3,0] -&gt; Pacific Ocean \n&nbsp;      [3,1] -&gt; [4,1] -&gt; Atlantic Ocean\n[4,0]: [4,0] -&gt; Pacific Ocean \n       [4,0] -&gt; Atlantic Ocean\nNote that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> heights = [[1]]\n<strong>Output:</strong> [[0,0]]\n<strong>Explanation:</strong> The water can flow from the only cell to the Pacific and Atlantic oceans.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == heights.length</code></li>\n\t<li><code>n == heights[r].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>0 &lt;= heights[r][c] &lt;= 10<sup>5</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/6kTZYvNNyps",
          "Category": "Graph",
          "Name": "Alien Dictionary (Leetcode Premium)",
          "Link": "https://leetcode.com/problems/alien-dictionary/",
          "Id": 32,
          "Level": "hard",
          "problem": null
        },
        {
          "videourl": "https://youtu.be/44H3cEC2fFM",
          "Category": "Interval",
          "Name": "Merge Intervals",
          "Link": "https://leetcode.com/problems/merge-intervals/",
          "Id": 36,
          "Level": "medium",
          "problem": "<p>Given an array&nbsp;of <code>intervals</code>&nbsp;where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,3],[2,6],[8,10],[15,18]]\n<strong>Output:</strong> [[1,6],[8,10],[15,18]]\n<strong>Explanation:</strong> Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,4],[4,5]]\n<strong>Output:</strong> [[1,5]]\n<strong>Explanation:</strong> Intervals [1,4] and [4,5] are considered overlapping.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/wiGpQwVHdE0",
          "Category": "String",
          "Name": "Longest Substring Without Repeating Characters",
          "Link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          "Id": 50,
          "Level": "medium",
          "problem": "<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword=\"substring-nonempty\"><strong>substring</strong></span> without repeating characters.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;abcabcbb&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;bbbbb&quot;\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;pwwkew&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.\nNotice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/oobqoCJlHA0",
          "Category": "Tree",
          "Name": "Implement Trie (Prefix Tree)",
          "Link": "https://leetcode.com/problems/implement-trie-prefix-tree/",
          "Id": 71,
          "Level": "medium",
          "problem": "<p>A <a href=\"https://en.wikipedia.org/wiki/Trie\" target=\"_blank\"><strong>trie</strong></a> (pronounced as &quot;try&quot;) or <strong>prefix tree</strong> is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.</p>\n\n<p>Implement the Trie class:</p>\n\n<ul>\n\t<li><code>Trie()</code> Initializes the trie object.</li>\n\t<li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li>\n\t<li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie (i.e., was inserted before), and <code>false</code> otherwise.</li>\n\t<li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>, and <code>false</code> otherwise.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]\n[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]\n<strong>Output</strong>\n[null, null, true, false, true, null, true]\n\n<strong>Explanation</strong>\nTrie trie = new Trie();\ntrie.insert(&quot;apple&quot;);\ntrie.search(&quot;apple&quot;);   // return True\ntrie.search(&quot;app&quot;);     // return False\ntrie.startsWith(&quot;app&quot;); // return True\ntrie.insert(&quot;app&quot;);\ntrie.search(&quot;app&quot;);     // return True\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= word.length, prefix.length &lt;= 2000</code></li>\n\t<li><code>word</code> and <code>prefix</code> consist only of lowercase English letters.</li>\n\t<li>At most <code>3 * 10<sup>4</sup></code> calls <strong>in total</strong> will be made to <code>insert</code>, <code>search</code>, and <code>startsWith</code>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/WnPLSRLSANE",
          "Category": "Binary",
          "Name": "Missing Number",
          "Link": "https://leetcode.com/problems/missing-number/",
          "Id": 14,
          "Level": "easy",
          "problem": "<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,0,1]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [9,6,4,2,3,5,7,0,1]\n<strong>Output:</strong> 8\n<strong>Explanation:</strong> n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= n</code></li>\n\t<li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?</p>\n"
        },
        {
          "videourl": "https://youtu.be/rWAJCfYYOvM",
          "Category": "Dynamic Programming",
          "Name": "House Robber II",
          "Link": "https://leetcode.com/problems/house-robber-ii/",
          "Id": 23,
          "Level": "medium",
          "problem": "<p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are <strong>arranged in a circle.</strong> That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and&nbsp;<b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.</p>\n\n<p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,2]\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3,1]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3]\n<strong>Output:</strong> 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 100</code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/8f1XPm4WOUc",
          "Category": "Graph",
          "Name": "Number of Connected Components in an Undirected Graph (Leetcode Premium)",
          "Link": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
          "Id": 34,
          "Level": "medium",
          "problem": null
        },
        {
          "videourl": "https://youtu.be/gqXU1UyA8pk",
          "Category": "String",
          "Name": "Longest Repeating Character Replacement",
          "Link": "https://leetcode.com/problems/longest-repeating-character-replacement/",
          "Id": 51,
          "Level": "medium",
          "problem": "<p>You are given a string <code>s</code> and an integer <code>k</code>. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most <code>k</code> times.</p>\n\n<p>Return <em>the length of the longest substring containing the same letter you can get after performing the above operations</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;ABAB&quot;, k = 2\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> Replace the two &#39;A&#39;s with two &#39;B&#39;s or vice versa.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;AABABBA&quot;, k = 1\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> Replace the one &#39;A&#39; in the middle with &#39;B&#39; and form &quot;AABBBBA&quot;.\nThe substring &quot;BBBB&quot; has the longest repeating letters, which is 4.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> consists of only uppercase English letters.</li>\n\t<li><code>0 &lt;= k &lt;= s.length</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/jSto0O4AJbM",
          "Category": "String",
          "Name": "Minimum Window Substring",
          "Link": "https://leetcode.com/problems/minimum-window-substring/",
          "Id": 52,
          "Level": "hard",
          "problem": "<p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window</strong></em> <span data-keyword=\"substring-nonempty\"><strong><em>substring</em></strong></span><em> of </em><code>s</code><em> such that every character in </em><code>t</code><em> (<strong>including duplicates</strong>) is included in the window</em>. If there is no such substring, return <em>the empty string </em><code>&quot;&quot;</code>.</p>\n\n<p>The testcases will be generated such that the answer is <strong>unique</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;\n<strong>Output:</strong> &quot;BANC&quot;\n<strong>Explanation:</strong> The minimum window substring &quot;BANC&quot; includes &#39;A&#39;, &#39;B&#39;, and &#39;C&#39; from string t.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;a&quot;, t = &quot;a&quot;\n<strong>Output:</strong> &quot;a&quot;\n<strong>Explanation:</strong> The entire string s is the minimum window.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;a&quot;, t = &quot;aa&quot;\n<strong>Output:</strong> &quot;&quot;\n<strong>Explanation:</strong> Both &#39;a&#39;s from t must be included in the window.\nSince the largest window of s only has one &#39;a&#39;, return empty string.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == s.length</code></li>\n\t<li><code>n == t.length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</p>\n"
        },
        {
          "videourl": "https://youtu.be/WTzjTskDFMg",
          "Category": "String",
          "Name": "Valid Parentheses",
          "Link": "https://leetcode.com/problems/valid-parentheses/",
          "Id": 55,
          "Level": "easy",
          "problem": "<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>\n\n<p>An input string is valid if:</p>\n\n<ol>\n\t<li>Open brackets must be closed by the same type of brackets.</li>\n\t<li>Open brackets must be closed in the correct order.</li>\n\t<li>Every close bracket has a corresponding open bracket of the same type.</li>\n</ol>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;()&quot;\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;()[]{}&quot;\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;(]&quot;\n<strong>Output:</strong> false\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/jJXJ16kPFWg",
          "Category": "String",
          "Name": "Valid Palindrome",
          "Link": "https://leetcode.com/problems/valid-palindrome/",
          "Id": 56,
          "Level": "easy",
          "problem": "<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>\n\n<p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;A man, a plan, a canal: Panama&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> &quot;amanaplanacanalpanama&quot; is a palindrome.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;race a car&quot;\n<strong>Output:</strong> false\n<strong>Explanation:</strong> &quot;raceacar&quot; is not a palindrome.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot; &quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> s is an empty string &quot;&quot; after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>\n\t<li><code>s</code> consists only of printable ASCII characters.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/XYQecbcd6_c",
          "Category": "String",
          "Name": "Longest Palindromic Substring",
          "Link": "https://leetcode.com/problems/longest-palindromic-substring/",
          "Id": 57,
          "Level": "medium",
          "problem": "<p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword=\"palindromic-string\"><em>palindromic</em></span> <span data-keyword=\"substring-nonempty\"><em>substring</em></span> in <code>s</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;babad&quot;\n<strong>Output:</strong> &quot;bab&quot;\n<strong>Explanation:</strong> &quot;aba&quot; is also a valid answer.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;cbbd&quot;\n<strong>Output:</strong> &quot;bb&quot;\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 1000</code></li>\n\t<li><code>s</code> consist of only digits and English letters.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/4RACzI5-du8",
          "Category": "String",
          "Name": "Palindromic Substrings",
          "Link": "https://leetcode.com/problems/palindromic-substrings/",
          "Id": 58,
          "Level": "medium",
          "problem": "<p>Given a string <code>s</code>, return <em>the number of <strong>palindromic substrings</strong> in it</em>.</p>\n\n<p>A string is a <strong>palindrome</strong> when it reads the same backward as forward.</p>\n\n<p>A <strong>substring</strong> is a contiguous sequence of characters within the string.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;abc&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> Three palindromic strings: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;aaa&quot;\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> Six palindromic strings: &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;aa&quot;, &quot;aa&quot;, &quot;aaa&quot;.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 1000</code></li>\n\t<li><code>s</code> consists of lowercase English letters.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/hTM3phVI6YQ",
          "Category": "Tree",
          "Name": "Maximum Depth of Binary Tree",
          "Link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
          "Id": 60,
          "Level": "easy",
          "problem": "<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>\n\n<p>A binary tree&#39;s <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg\" style=\"width: 400px; height: 277px;\" />\n<pre>\n<strong>Input:</strong> root = [3,9,20,null,null,15,7]\n<strong>Output:</strong> 3\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [1,null,2]\n<strong>Output:</strong> 2\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/pV2kpPD66nE",
          "Category": "Graph",
          "Name": "Number of Islands",
          "Link": "https://leetcode.com/problems/number-of-islands/",
          "Id": 30,
          "Level": "medium",
          "problem": "<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>&#39;1&#39;</code>s (land) and <code>&#39;0&#39;</code>s (water), return <em>the number of islands</em>.</p>\n\n<p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [\n  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]\n]\n<strong>Output:</strong> 1\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> grid = [\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],\n  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]\n]\n<strong>Output:</strong> 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == grid.length</code></li>\n\t<li><code>n == grid[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 300</code></li>\n\t<li><code>grid[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/P6RZZMu_maU",
          "Category": "Graph",
          "Name": "Longest Consecutive Sequence",
          "Link": "https://leetcode.com/problems/longest-consecutive-sequence/",
          "Id": 31,
          "Level": "hard",
          "problem": "<p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p>\n\n<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [100,4,200,1,3,2]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]\n<strong>Output:</strong> 9\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/gBTe7lFR3vc",
          "Category": "Linked List",
          "Name": "Detect Cycle in a Linked List",
          "Link": "https://leetcode.com/problems/linked-list-cycle/",
          "Id": 41,
          "Level": "easy",
          "problem": "<p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>\n\n<p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the&nbsp;<code>next</code>&nbsp;pointer. Internally, <code>pos</code>&nbsp;is used to denote the index of the node that&nbsp;tail&#39;s&nbsp;<code>next</code>&nbsp;pointer is connected to.&nbsp;<strong>Note that&nbsp;<code>pos</code>&nbsp;is not passed as a parameter</strong>.</p>\n\n<p>Return&nbsp;<code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png\" style=\"width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;\" />\n<pre>\n<strong>Input:</strong> head = [3,2,0,-4], pos = 1\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png\" style=\"width: 141px; height: 74px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2], pos = 0\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 0th node.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png\" style=\"width: 45px; height: 45px;\" />\n<pre>\n<strong>Input:</strong> head = [1], pos = -1\n<strong>Output:</strong> false\n<strong>Explanation:</strong> There is no cycle in the linked list.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li>\n\t<li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p>\n"
        },
        {
          "videourl": "https://youtu.be/S5bfdUTrKLM",
          "Category": "Linked List",
          "Name": "Reorder List",
          "Link": "https://leetcode.com/problems/reorder-list/",
          "Id": 45,
          "Level": "medium",
          "problem": "<p>You are given the head of a singly linked-list. The list can be represented as:</p>\n\n<pre>\nL<sub>0</sub> &rarr; L<sub>1</sub> &rarr; &hellip; &rarr; L<sub>n - 1</sub> &rarr; L<sub>n</sub>\n</pre>\n\n<p><em>Reorder the list to be on the following form:</em></p>\n\n<pre>\nL<sub>0</sub> &rarr; L<sub>n</sub> &rarr; L<sub>1</sub> &rarr; L<sub>n - 1</sub> &rarr; L<sub>2</sub> &rarr; L<sub>n - 2</sub> &rarr; &hellip;\n</pre>\n\n<p>You may not modify the values in the list&#39;s nodes. Only nodes themselves may be changed.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg\" style=\"width: 422px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4]\n<strong>Output:</strong> [1,4,2,3]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5]\n<strong>Output:</strong> [1,5,2,4,3]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is in the range <code>[1, 5 * 10<sup>4</sup>]</code>.</li>\n\t<li><code>1 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/ihj4IQGZ2zc",
          "Category": "Tree",
          "Name": "Construct Binary Tree from Preorder and Inorder Traversal",
          "Link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
          "Id": 67,
          "Level": "medium",
          "problem": "<p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/tree.jpg\" style=\"width: 277px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\n<strong>Output:</strong> [3,9,20,null,null,15,7]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> preorder = [-1], inorder = [-1]\n<strong>Output:</strong> [-1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= preorder.length &lt;= 3000</code></li>\n\t<li><code>inorder.length == preorder.length</code></li>\n\t<li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li>\n\t<li><code>preorder</code> and <code>inorder</code> consist of <strong>unique</strong> values.</li>\n\t<li>Each value of <code>inorder</code> also appears in <code>preorder</code>.</li>\n\t<li><code>preorder</code> is <strong>guaranteed</strong> to be the preorder traversal of the tree.</li>\n\t<li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/H9bfqozjoqs",
          "Category": "Dynamic Programming",
          "Name": "Coin Change",
          "Link": "https://leetcode.com/problems/coin-change/",
          "Id": 17,
          "Level": "medium",
          "problem": "<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>\n\n<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>\n\n<p>You may assume that you have an infinite number of each kind of coin.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> coins = [1,2,5], amount = 11\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> 11 = 5 + 5 + 1\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> coins = [2], amount = 3\n<strong>Output:</strong> -1\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> coins = [1], amount = 0\n<strong>Output:</strong> 0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= coins.length &lt;= 12</code></li>\n\t<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>\n\t<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/cjWnW0hdF1Y",
          "Category": "Dynamic Programming",
          "Name": "Longest Increasing Subsequence",
          "Link": "https://leetcode.com/problems/longest-increasing-subsequence/",
          "Id": 18,
          "Level": "medium",
          "problem": "<p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing </strong></em><span data-keyword=\"subsequence-array\"><em><strong>subsequence</strong></em></span>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [10,9,2,5,3,7,101,18]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> The longest increasing subsequence is [2,3,7,101], therefore the length is 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,0,3,2,3]\n<strong>Output:</strong> 4\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [7,7,7,7,7,7,7]\n<strong>Output:</strong> 1\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 2500</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><b>Follow up:</b>&nbsp;Can you come up with an algorithm that runs in&nbsp;<code>O(n log(n))</code> time complexity?</p>\n"
        },
        {
          "videourl": "https://youtu.be/Sx9NNgInc3A",
          "Category": "Dynamic Programming",
          "Name": "Word Break Problem",
          "Link": "https://leetcode.com/problems/word-break/",
          "Id": 20,
          "Level": "medium",
          "problem": "<p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.</p>\n\n<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;leetcode&quot;, wordDict = [&quot;leet&quot;,&quot;code&quot;]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Return true because &quot;leetcode&quot; can be segmented as &quot;leet code&quot;.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;applepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Return true because &quot;applepenapple&quot; can be segmented as &quot;apple pen apple&quot;.\nNote that you are allowed to reuse a dictionary word.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]\n<strong>Output:</strong> false\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 300</code></li>\n\t<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>\n\t<li><code>1 &lt;= wordDict[i].length &lt;= 20</code></li>\n\t<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>\n\t<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/A8NUOmlwOlM",
          "Category": "Interval",
          "Name": "Insert Interval",
          "Link": "https://leetcode.com/problems/insert-interval/",
          "Id": 35,
          "Level": "hard",
          "problem": "<p>You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i<sup>th</sup></code> interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.</p>\n\n<p>Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).</p>\n\n<p>Return <code>intervals</code><em> after the insertion</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,3],[6,9]], newInterval = [2,5]\n<strong>Output:</strong> [[1,5],[6,9]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\n<strong>Output:</strong> [[1,2],[3,10],[12,16]]\n<strong>Explanation:</strong> Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>5</sup></code></li>\n\t<li><code>intervals</code> is sorted by <code>start<sub>i</sub></code> in <strong>ascending</strong> order.</li>\n\t<li><code>newInterval.length == 2</code></li>\n\t<li><code>0 &lt;= start &lt;= end &lt;= 10<sup>5</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/nONCGxWoUfM",
          "Category": "Interval",
          "Name": "Non-overlapping Intervals",
          "Link": "https://leetcode.com/problems/non-overlapping-intervals/",
          "Id": 37,
          "Level": "medium",
          "problem": "<p>Given an array of intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, return <em>the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,2],[2,3],[3,4],[1,3]]\n<strong>Output:</strong> 1\n<strong>Explanation:</strong> [1,3] can be removed and the rest of the intervals are non-overlapping.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,2],[1,2],[1,2]]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> You need to remove two [1,2] to make the rest of the intervals non-overlapping.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> intervals = [[1,2],[2,3]]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> You don&#39;t need to remove any of the intervals since they&#39;re already non-overlapping.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= intervals.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>intervals[i].length == 2</code></li>\n\t<li><code>-5 * 10<sup>4</sup> &lt;= start<sub>i</sub> &lt; end<sub>i</sub> &lt;= 5 * 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/G0_I-ZF0S38",
          "Category": "Linked List",
          "Name": "Reverse a Linked List",
          "Link": "https://leetcode.com/problems/reverse-linked-list/",
          "Id": 40,
          "Level": "easy",
          "problem": "<p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5]\n<strong>Output:</strong> [5,4,3,2,1]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg\" style=\"width: 182px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2]\n<strong>Output:</strong> [2,1]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>\n\t<li><code>-5000 &lt;= Node.val &lt;= 5000</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?</p>\n"
        },
        {
          "videourl": "https://youtu.be/XIdigk956u0",
          "Category": "Linked List",
          "Name": "Merge Two Sorted Lists",
          "Link": "https://leetcode.com/problems/merge-two-sorted-lists/",
          "Id": 42,
          "Level": "easy",
          "problem": "<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>\n\n<p>Merge the two lists in a one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>\n\n<p>Return <em>the head of the merged linked list</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg\" style=\"width: 662px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]\n<strong>Output:</strong> [1,1,2,3,4,4]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> list1 = [], list2 = []\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> list1 = [], list2 = [0]\n<strong>Output:</strong> [0]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>\n\t<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\n\t<li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/fMSJSS7eO1w",
          "Category": "Matrix",
          "Name": "Rotate Image",
          "Link": "https://leetcode.com/problems/rotate-image/",
          "Id": 48,
          "Level": "medium",
          "problem": "<p>You are given an <code>n x n</code> 2D <code>matrix</code> representing an image, rotate the image by <strong>90</strong> degrees (clockwise).</p>\n\n<p>You have to rotate the image <a href=\"https://en.wikipedia.org/wiki/In-place_algorithm\" target=\"_blank\"><strong>in-place</strong></a>, which means you have to modify the input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg\" style=\"width: 500px; height: 188px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]\n<strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg\" style=\"width: 500px; height: 201px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n<strong>Output:</strong> [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == matrix.length == matrix[i].length</code></li>\n\t<li><code>1 &lt;= n &lt;= 20</code></li>\n\t<li><code>-1000 &lt;= matrix[i][j] &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/3OamzN90kPg",
          "Category": "Arrays",
          "Name": "Contains Duplicate",
          "Link": "https://leetcode.com/problems/contains-duplicate/",
          "Id": 3,
          "Level": "easy",
          "problem": "<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2,3,1]\n<strong>Output:</strong> true\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2,3,4]\n<strong>Output:</strong> false\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> nums = [1,1,1,3,3,4,3,2,4,2]\n<strong>Output:</strong> true\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/5WZl3MMT0Eg",
          "Category": "Arrays",
          "Name": "Maximum Subarray",
          "Link": "https://leetcode.com/problems/maximum-subarray/",
          "Id": 5,
          "Level": "easy",
          "problem": "<p>Given an integer array <code>nums</code>, find the <span data-keyword=\"subarray-nonempty\">subarray</span> which has the largest sum and return <em>its sum</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> [4,-1,2,1] has the largest sum = 6.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1]\n<strong>Output:</strong> 1\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [5,4,-1,7,8]\n<strong>Output:</strong> 23\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution using the <strong>divide and conquer</strong> approach, which is more subtle.</p>\n"
        },
        {
          "videourl": "https://youtu.be/EgI5nU9etnU",
          "Category": "Graph",
          "Name": "Course Schedule",
          "Link": "https://leetcode.com/problems/course-schedule/",
          "Id": 28,
          "Level": "medium",
          "problem": "<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you <strong>must</strong> take course <code>b<sub>i</sub></code> first if you want to take course <code>a<sub>i</sub></code>.</p>\n\n<ul>\n\t<li>For example, the pair <code>[0, 1]</code>, indicates that to take course <code>0</code> you have to first take course <code>1</code>.</li>\n</ul>\n\n<p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0]]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> numCourses = 2, prerequisites = [[1,0],[0,1]]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= numCourses &lt;= 2000</code></li>\n\t<li><code>0 &lt;= prerequisites.length &lt;= 5000</code></li>\n\t<li><code>prerequisites[i].length == 2</code></li>\n\t<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; numCourses</code></li>\n\t<li>All the pairs prerequisites[i] are <strong>unique</strong>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/BJnMZNwUk1M",
          "Category": "Matrix",
          "Name": "Spiral Matrix",
          "Link": "https://leetcode.com/problems/spiral-matrix/",
          "Id": 47,
          "Level": "medium",
          "problem": "<p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg\" style=\"width: 242px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]\n<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg\" style=\"width: 322px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == matrix.length</code></li>\n\t<li><code>n == matrix[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 10</code></li>\n\t<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/B1k_sxOSgv8",
          "Category": "String",
          "Name": "Encode and Decode Strings (Leetcode Premium)",
          "Link": "https://leetcode.com/problems/encode-and-decode-strings/",
          "Id": 59,
          "Level": "medium",
          "problem": null
        },
        {
          "videourl": "https://youtu.be/E36O5SWp-LE",
          "Category": "Tree",
          "Name": "Subtree of Another Tree",
          "Link": "https://leetcode.com/problems/subtree-of-another-tree/",
          "Id": 66,
          "Level": "easy",
          "problem": "<p>Given the roots of two binary trees <code>root</code> and <code>subRoot</code>, return <code>true</code> if there is a subtree of <code>root</code> with the same structure and node values of<code> subRoot</code> and <code>false</code> otherwise.</p>\n\n<p>A subtree of a binary tree <code>tree</code> is a tree that consists of a node in <code>tree</code> and all of this node&#39;s descendants. The tree <code>tree</code> could also be considered as a subtree of itself.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg\" style=\"width: 532px; height: 400px;\" />\n<pre>\n<strong>Input:</strong> root = [3,4,5,1,2], subRoot = [4,1,2]\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/04/28/subtree2-tree.jpg\" style=\"width: 502px; height: 458px;\" />\n<pre>\n<strong>Input:</strong> root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]\n<strong>Output:</strong> false\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the <code>root</code> tree is in the range <code>[1, 2000]</code>.</li>\n\t<li>The number of nodes in the <code>subRoot</code> tree is in the range <code>[1, 1000]</code>.</li>\n\t<li><code>-10<sup>4</sup> &lt;= root.val &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= subRoot.val &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/s6ATEkipzow",
          "Category": "Tree",
          "Name": "Validate Binary Search Tree",
          "Link": "https://leetcode.com/problems/validate-binary-search-tree/",
          "Id": 68,
          "Level": "medium",
          "problem": "<p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p>\n\n<p>A <strong>valid BST</strong> is defined as follows:</p>\n\n<ul>\n\t<li>The left <span data-keyword=\"subtree\">subtree</span> of a node contains only nodes with keys <strong>less than</strong> the node&#39;s key.</li>\n\t<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node&#39;s key.</li>\n\t<li>Both the left and right subtrees must also be binary search trees.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg\" style=\"width: 302px; height: 182px;\" />\n<pre>\n<strong>Input:</strong> root = [2,1,3]\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg\" style=\"width: 422px; height: 292px;\" />\n<pre>\n<strong>Input:</strong> root = [5,1,4,null,null,3,6]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> The root node&#39;s value is 5 but its right child&#39;s value is 4.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[1, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/YPTqKIgVk-k",
          "Category": "Heap",
          "Name": "Top K Frequent Elements",
          "Link": "https://leetcode.com/problems/top-k-frequent-elements/",
          "Id": 75,
          "Level": "medium",
          "problem": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1,1,1,2,2,3], k = 2\n<strong>Output:</strong> [1,2]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [1], k = 1\n<strong>Output:</strong> [1]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>\n\t<li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Your algorithm&#39;s time complexity must be better than <code>O(n log n)</code>, where n is the array&#39;s size.</p>\n"
        },
        {
          "videourl": "https://youtu.be/U8XENwh8Oy8",
          "Category": "Arrays",
          "Name": "Search in Rotated Sorted Array",
          "Link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          "Id": 8,
          "Level": "medium",
          "problem": "<p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values).</p>\n\n<p>Prior to being passed to your function, <code>nums</code> is <strong>possibly rotated</strong> at an unknown pivot index <code>k</code> (<code>1 &lt;= k &lt; nums.length</code>) such that the resulting array is <code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]</code> (<strong>0-indexed</strong>). For example, <code>[0,1,2,4,5,6,7]</code> might be rotated at pivot index <code>3</code> and become <code>[4,5,6,7,0,1,2]</code>.</p>\n\n<p>Given the array <code>nums</code> <strong>after</strong> the possible rotation and an integer <code>target</code>, return <em>the index of </em><code>target</code><em> if it is in </em><code>nums</code><em>, or </em><code>-1</code><em> if it is not in </em><code>nums</code>.</p>\n\n<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 0\n<strong>Output:</strong> 4\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [4,5,6,7,0,1,2], target = 3\n<strong>Output:</strong> -1\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> nums = [1], target = 0\n<strong>Output:</strong> -1\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 5000</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>\n\t<li>All values of <code>nums</code> are <strong>unique</strong>.</li>\n\t<li><code>nums</code> is an ascending array that is possibly rotated.</li>\n\t<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/jzZsG8n2R9A",
          "Category": "Arrays",
          "Name": "3Sum",
          "Link": "https://leetcode.com/problems/3sum/",
          "Id": 9,
          "Level": "medium",
          "problem": "<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>\n\n<p>Notice that the solution set must not contain duplicate triplets.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [-1,0,1,2,-1,-4]\n<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]\n<strong>Explanation:</strong> \nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,1]\n<strong>Output:</strong> []\n<strong>Explanation:</strong> The only possible triplet does not sum up to 0.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,0,0]\n<strong>Output:</strong> [[0,0,0]]\n<strong>Explanation:</strong> The only possible triplet sums up to 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>3 &lt;= nums.length &lt;= 3000</code></li>\n\t<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/IlEsdxuD4lY",
          "Category": "Dynamic Programming",
          "Name": "Unique Paths",
          "Link": "https://leetcode.com/problems/unique-paths/",
          "Id": 25,
          "Level": "medium",
          "problem": "<p>There is a robot on an <code>m x n</code> grid. The robot is initially located at the <strong>top-left corner</strong> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.</p>\n\n<p>Given the two integers <code>m</code> and <code>n</code>, return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p>\n\n<p>The test cases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img src=\"https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png\" style=\"width: 400px; height: 183px;\" />\n<pre>\n<strong>Input:</strong> m = 3, n = 7\n<strong>Output:</strong> 28\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> m = 3, n = 2\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right -&gt; Down -&gt; Down\n2. Down -&gt; Down -&gt; Right\n3. Down -&gt; Right -&gt; Down\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= m, n &lt;= 100</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/mQeF6bN8hMk",
          "Category": "Graph",
          "Name": "Clone Graph",
          "Link": "https://leetcode.com/problems/clone-graph/",
          "Id": 27,
          "Level": "medium",
          "problem": "<p>Given a reference of a node in a <strong><a href=\"https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph\" target=\"_blank\">connected</a></strong> undirected graph.</p>\n\n<p>Return a <a href=\"https://en.wikipedia.org/wiki/Object_copying#Deep_copy\" target=\"_blank\"><strong>deep copy</strong></a> (clone) of the graph.</p>\n\n<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>\n\n<pre>\nclass Node {\n    public int val;\n    public List&lt;Node&gt; neighbors;\n}\n</pre>\n\n<p>&nbsp;</p>\n\n<p><strong>Test case format:</strong></p>\n\n<p>For simplicity, each node&#39;s value is the same as the node&#39;s index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.</p>\n\n<p><b>An adjacency list</b> is a collection of unordered <b>lists</b> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.</p>\n\n<p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png\" style=\"width: 454px; height: 500px;\" />\n<pre>\n<strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]\n<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]\n<strong>Explanation:</strong> There are 4 nodes in the graph.\n1st node (val = 1)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)&#39;s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)&#39;s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/01/07/graph.png\" style=\"width: 163px; height: 148px;\" />\n<pre>\n<strong>Input:</strong> adjList = [[]]\n<strong>Output:</strong> [[]]\n<strong>Explanation:</strong> Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> adjList = []\n<strong>Output:</strong> []\n<strong>Explanation:</strong> This an empty graph, it does not have any nodes.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the graph is in the range <code>[0, 100]</code>.</li>\n\t<li><code>1 &lt;= Node.val &lt;= 100</code></li>\n\t<li><code>Node.val</code> is unique for each node.</li>\n\t<li>There are no repeated edges and no self-loops in the graph.</li>\n\t<li>The Graph is connected and all nodes can be visited starting from the given node.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/bXsUuownnoQ",
          "Category": "Graph",
          "Name": "Graph Valid Tree (Leetcode Premium)",
          "Link": "https://leetcode.com/problems/graph-valid-tree/",
          "Id": 33,
          "Level": "medium",
          "problem": null
        },
        {
          "videourl": "https://youtu.be/9UtInBqnCgA",
          "Category": "String",
          "Name": "Valid Anagram",
          "Link": "https://leetcode.com/problems/valid-anagram/",
          "Id": 53,
          "Level": "easy",
          "problem": "<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em> <code>t</code> <em>is an anagram of</em> <code>s</code><em>, and</em> <code>false</code> <em>otherwise</em>.</p>\n\n<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> s = \"anagram\", t = \"nagaram\"\n<strong>Output:</strong> true\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> s = \"rat\", t = \"car\"\n<strong>Output:</strong> false\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p>\n"
        },
        {
          "videourl": "https://youtu.be/6ZnyEApgFYg",
          "Category": "Tree",
          "Name": "Binary Tree Level Order Traversal",
          "Link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          "Id": 64,
          "Level": "medium",
          "problem": "<p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes&#39; values</em>. (i.e., from left to right, level by level).</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg\" style=\"width: 277px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> root = [3,9,20,null,null,15,7]\n<strong>Output:</strong> [[3],[9,20],[15,7]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [1]\n<strong>Output:</strong> [[1]]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/q5a5OiGbT6Q",
          "Category": "Heap",
          "Name": "Merge K Sorted Lists",
          "Link": "https://leetcode.com/problems/merge-k-sorted-lists/",
          "Id": 74,
          "Level": "hard",
          "problem": "<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>\n\n<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]\n<strong>Output:</strong> [1,1,2,3,4,4,5,6]\n<strong>Explanation:</strong> The linked-lists are:\n[\n  1-&gt;4-&gt;5,\n  1-&gt;3-&gt;4,\n  2-&gt;6\n]\nmerging them into one sorted list:\n1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = []\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[]]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>k == lists.length</code></li>\n\t<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>\n\t<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/RyBM56RIWrM",
          "Category": "Binary",
          "Name": "Counting Bits",
          "Link": "https://leetcode.com/problems/counting-bits/",
          "Id": 13,
          "Level": "medium",
          "problem": "<p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> </em>(<code>0 &lt;= i &lt;= n</code>)<em>, </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>&#39;s</strong> in the binary representation of </em><code>i</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 2\n<strong>Output:</strong> [0,1,1]\n<strong>Explanation:</strong>\n0 --&gt; 0\n1 --&gt; 1\n2 --&gt; 10\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 5\n<strong>Output:</strong> [0,1,1,2,1,2]\n<strong>Explanation:</strong>\n0 --&gt; 0\n1 --&gt; 1\n2 --&gt; 10\n3 --&gt; 11\n4 --&gt; 100\n5 --&gt; 101\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= n &lt;= 10<sup>5</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong></p>\n\n<ul>\n\t<li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li>\n\t<li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/UcoN6UjAI64",
          "Category": "Binary",
          "Name": "Reverse Bits",
          "Link": "https://leetcode.com/problems/reverse-bits/",
          "Id": 15,
          "Level": "easy",
          "problem": "<p>Reverse bits of a given 32 bits unsigned integer.</p>\n\n<p><strong>Note:</strong></p>\n\n<ul>\n\t<li>Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer&#39;s internal binary representation is the same, whether it is signed or unsigned.</li>\n\t<li>In Java, the compiler represents the signed integers using <a href=\"https://en.wikipedia.org/wiki/Two%27s_complement\" target=\"_blank\">2&#39;s complement notation</a>. Therefore, in <strong class=\"example\">Example 2</strong> above, the input represents the signed integer <code>-3</code> and the output represents the signed integer <code>-1073741825</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 00000010100101000001111010011100\n<strong>Output:</strong>    964176192 (00111001011110000010100101000000)\n<strong>Explanation: </strong>The input binary string <strong>00000010100101000001111010011100</strong> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <strong>00111001011110000010100101000000</strong>.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 11111111111111111111111111111101\n<strong>Output:</strong>   3221225471 (10111111111111111111111111111111)\n<strong>Explanation: </strong>The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The input must be a <strong>binary string</strong> of length <code>32</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p>\n"
        },
        {
          "videourl": "https://youtu.be/Y0lT9Fck7qI",
          "Category": "Dynamic Programming",
          "Name": "Climbing Stairs",
          "Link": "https://leetcode.com/problems/climbing-stairs/",
          "Id": 16,
          "Level": "easy",
          "problem": "<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>\n\n<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 2\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> n = 3\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 45</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/GBKI9VSKdGg",
          "Category": "Dynamic Programming",
          "Name": "Combination Sum",
          "Link": "https://leetcode.com/problems/combination-sum/",
          "Id": 21,
          "Level": "medium",
          "problem": "<p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return <em>a list of all <strong>unique combinations</strong> of </em><code>candidates</code><em> where the chosen numbers sum to </em><code>target</code><em>.</em> You may return the combinations in <strong>any order</strong>.</p>\n\n<p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the <span data-keyword=\"frequency-array\">frequency</span> of at least one of the chosen numbers is different.</p>\n\n<p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> candidates = [2,3,6,7], target = 7\n<strong>Output:</strong> [[2,2,3],[7]]\n<strong>Explanation:</strong>\n2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> candidates = [2,3,5], target = 8\n<strong>Output:</strong> [[2,2,2,2],[2,3,3],[3,5]]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> candidates = [2], target = 1\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= candidates.length &lt;= 30</code></li>\n\t<li><code>2 &lt;= candidates[i] &lt;= 40</code></li>\n\t<li>All elements of <code>candidates</code> are <strong>distinct</strong>.</li>\n\t<li><code>1 &lt;= target &lt;= 40</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/73r3KWiEvyk",
          "Category": "Dynamic Programming",
          "Name": "House Robber",
          "Link": "https://leetcode.com/problems/house-robber/",
          "Id": 22,
          "Level": "easy",
          "problem": "<p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.</p>\n\n<p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <b>without alerting the police</b></em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [1,2,3,1]\n<strong>Output:</strong> 4\n<strong>Explanation:</strong> Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,9,3,1]\n<strong>Output:</strong> 12\n<strong>Explanation:</strong> Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 100</code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 400</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/Yan0cv2cLy8",
          "Category": "Dynamic Programming",
          "Name": "Jump Game",
          "Link": "https://leetcode.com/problems/jump-game/",
          "Id": 26,
          "Level": "medium",
          "problem": "<p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong>, and each element in the array represents your maximum jump length at that position.</p>\n\n<p>Return <code>true</code><em> if you can reach the last index, or </em><code>false</code><em> otherwise</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,1,1,4]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Jump 1 step from index 0 to 1, then 3 steps to the last index.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,1,0,4]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/q5a5OiGbT6Q",
          "Category": "Linked List",
          "Name": "Merge K Sorted Lists",
          "Link": "https://leetcode.com/problems/merge-k-sorted-lists/",
          "Id": 43,
          "Level": "hard",
          "problem": "<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>\n\n<p><em>Merge all the linked-lists into one sorted linked-list and return it.</em></p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]\n<strong>Output:</strong> [1,1,2,3,4,4,5,6]\n<strong>Explanation:</strong> The linked-lists are:\n[\n  1-&gt;4-&gt;5,\n  1-&gt;3-&gt;4,\n  2-&gt;6\n]\nmerging them into one sorted list:\n1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = []\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> lists = [[]]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>k == lists.length</code></li>\n\t<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= lists[i].length &lt;= 500</code></li>\n\t<li><code>-10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup></code></li>\n\t<li><code>lists[i]</code> is sorted in <strong>ascending order</strong>.</li>\n\t<li>The sum of <code>lists[i].length</code> will not exceed <code>10<sup>4</sup></code>.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/XVuQxVej6y8",
          "Category": "Linked List",
          "Name": "Remove Nth Node From End Of List",
          "Link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
          "Id": 44,
          "Level": "medium",
          "problem": "<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg\" style=\"width: 542px; height: 222px;\" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5], n = 2\n<strong>Output:</strong> [1,2,3,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = [1], n = 1\n<strong>Output:</strong> []\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = [1,2], n = 1\n<strong>Output:</strong> [1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is <code>sz</code>.</li>\n\t<li><code>1 &lt;= sz &lt;= 30</code></li>\n\t<li><code>0 &lt;= Node.val &lt;= 100</code></li>\n\t<li><code>1 &lt;= n &lt;= sz</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you do this in one pass?</p>\n"
        },
        {
          "videourl": "https://youtu.be/T41rL0L3Pnw",
          "Category": "Matrix",
          "Name": "Set Matrix Zeroes",
          "Link": "https://leetcode.com/problems/set-matrix-zeroes/",
          "Id": 46,
          "Level": "medium",
          "problem": "<p>Given an <code>m x n</code> integer matrix <code>matrix</code>, if an element is <code>0</code>, set its entire row and column to <code>0</code>&#39;s.</p>\n\n<p>You must do it <a href=\"https://en.wikipedia.org/wiki/In-place_algorithm\" target=\"_blank\">in place</a>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg\" style=\"width: 450px; height: 169px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[1,1,1],[1,0,1],[1,1,1]]\n<strong>Output:</strong> [[1,0,1],[0,0,0],[1,0,1]]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg\" style=\"width: 450px; height: 137px;\" />\n<pre>\n<strong>Input:</strong> matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n<strong>Output:</strong> [[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == matrix.length</code></li>\n\t<li><code>n == matrix[0].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 200</code></li>\n\t<li><code>-2<sup>31</sup> &lt;= matrix[i][j] &lt;= 2<sup>31</sup> - 1</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong></p>\n\n<ul>\n\t<li>A straightforward solution using <code>O(mn)</code> space is probably a bad idea.</li>\n\t<li>A simple improvement uses <code>O(m + n)</code> space, but still not the best solution.</li>\n\t<li>Could you devise a constant space solution?</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/pfiQ_PS1g8E",
          "Category": "Matrix",
          "Name": "Word Search",
          "Link": "https://leetcode.com/problems/word-search/",
          "Id": 49,
          "Level": "medium",
          "problem": "<p>Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> <em>if</em> <code>word</code> <em>exists in the grid</em>.</p>\n\n<p>The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/04/word2.jpg\" style=\"width: 322px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg\" style=\"width: 322px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;SEE&quot;\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/15/word3.jpg\" style=\"width: 322px; height: 242px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCB&quot;\n<strong>Output:</strong> false\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == board.length</code></li>\n\t<li><code>n = board[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 6</code></li>\n\t<li><code>1 &lt;= word.length &lt;= 15</code></li>\n\t<li><code>board</code> and <code>word</code> consists of only lowercase and uppercase English letters.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you use search pruning to make your solution faster with a larger <code>board</code>?</p>\n"
        },
        {
          "videourl": "https://youtu.be/vzdNOK2oB2E",
          "Category": "String",
          "Name": "Group Anagrams",
          "Link": "https://leetcode.com/problems/group-anagrams/",
          "Id": 54,
          "Level": "medium",
          "problem": "<p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>\n\n<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\n<strong>Output:</strong> [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> strs = [\"\"]\n<strong>Output:</strong> [[\"\"]]\n</pre><p><strong class=\"example\">Example 3:</strong></p>\n<pre><strong>Input:</strong> strs = [\"a\"]\n<strong>Output:</strong> [[\"a\"]]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= strs[i].length &lt;= 100</code></li>\n\t<li><code>strs[i]</code> consists of lowercase English letters.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/Hr5cWUld4vU",
          "Category": "Tree",
          "Name": "Binary Tree Maximum Path Sum",
          "Link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
          "Id": 63,
          "Level": "hard",
          "problem": "<p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence <strong>at most once</strong>. Note that the path does not need to pass through the root.</p>\n\n<p>The <strong>path sum</strong> of a path is the sum of the node&#39;s values in the path.</p>\n\n<p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any <strong>non-empty</strong> path</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg\" style=\"width: 322px; height: 182px;\" />\n<pre>\n<strong>Input:</strong> root = [1,2,3]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> The optimal path is 2 -&gt; 1 -&gt; 3 with a path sum of 2 + 1 + 3 = 6.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg\" />\n<pre>\n<strong>Input:</strong> root = [-10,9,20,null,null,15,7]\n<strong>Output:</strong> 42\n<strong>Explanation:</strong> The optimal path is 15 -&gt; 20 -&gt; 7 with a path sum of 15 + 20 + 7 = 42.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[1, 3 * 10<sup>4</sup>]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/5LUXSvjmGCw",
          "Category": "Tree",
          "Name": "Kth Smallest Element in a BST",
          "Link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
          "Id": 69,
          "Level": "medium",
          "problem": "<p>Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest value (<strong>1-indexed</strong>) of all the values of the nodes in the tree</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg\" style=\"width: 212px; height: 301px;\" />\n<pre>\n<strong>Input:</strong> root = [3,1,4,null,2], k = 1\n<strong>Output:</strong> 1\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg\" style=\"width: 382px; height: 302px;\" />\n<pre>\n<strong>Input:</strong> root = [5,3,6,2,4,null,null,1], k = 3\n<strong>Output:</strong> 3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is <code>n</code>.</li>\n\t<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?</p>\n"
        },
        {
          "videourl": "https://youtu.be/KLlXCFG5TnA",
          "Category": "Arrays",
          "Name": "Two Sum",
          "Link": "https://leetcode.com/problems/two-sum/",
          "Id": 1,
          "Level": "easy",
          "problem": "<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?"
        },
        {
          "videourl": "https://youtu.be/1pkOgXD63yU",
          "Category": "Arrays",
          "Name": "Best Time to Buy and Sell Stock",
          "Link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          "Id": 2,
          "Level": "easy",
          "problem": "<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>\n\n<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>\n\n<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> prices = [7,1,5,3,6,4]\n<strong>Output:</strong> 5\n<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> prices = [7,6,4,3,1]\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/bNvIQI2wAjk",
          "Category": "Arrays",
          "Name": "Product of Array Except Self",
          "Link": "https://leetcode.com/problems/product-of-array-except-self/",
          "Id": 4,
          "Level": "medium",
          "problem": "<p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em> <code>nums[i]</code>.</p>\n\n<p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p>\n\n<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and without using the division operation.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [1,2,3,4]\n<strong>Output:</strong> [24,12,8,6]\n</pre><p><strong class=\"example\">Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [-1,1,0,-3,3]\n<strong>Output:</strong> [0,0,9,0,0]\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>-30 &lt;= nums[i] &lt;= 30</code></li>\n\t<li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong>&nbsp;Can you solve the problem in <code>O(1)&nbsp;</code>extra&nbsp;space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)</p>\n"
        },
        {
          "videourl": "https://youtu.be/Ua0GhsJSlWM",
          "Category": "Dynamic Programming",
          "Name": "Longest Common Subsequence",
          "Link": "https://leetcode.com/problems/longest-common-subsequence/",
          "Id": 19,
          "Level": "medium",
          "problem": "<p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong>. </em>If there is no <strong>common subsequence</strong>, return <code>0</code>.</p>\n\n<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>\n\n<ul>\n\t<li>For example, <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;abcde&quot;</code>.</li>\n</ul>\n\n<p>A <strong>common subsequence</strong> of two strings is a subsequence that is common to both strings.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> text1 = &quot;abcde&quot;, text2 = &quot;ace&quot; \n<strong>Output:</strong> 3  \n<strong>Explanation:</strong> The longest common subsequence is &quot;ace&quot; and its length is 3.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> text1 = &quot;abc&quot;, text2 = &quot;abc&quot;\n<strong>Output:</strong> 3\n<strong>Explanation:</strong> The longest common subsequence is &quot;abc&quot; and its length is 3.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> text1 = &quot;abc&quot;, text2 = &quot;def&quot;\n<strong>Output:</strong> 0\n<strong>Explanation:</strong> There is no such common subsequence, so the result is 0.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li>\n\t<li><code>text1</code> and <code>text2</code> consist of only lowercase English characters.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/PaJxqZVPhbg",
          "Category": "Interval",
          "Name": "Meeting Rooms (Leetcode Premium)",
          "Link": "https://leetcode.com/problems/meeting-rooms/",
          "Id": 38,
          "Level": "easy",
          "problem": null
        },
        {
          "videourl": "https://youtu.be/FdzJmTCVyJU",
          "Category": "Interval",
          "Name": "Meeting Rooms II (Leetcode Premium)",
          "Link": "https://leetcode.com/problems/meeting-rooms-ii/",
          "Id": 39,
          "Level": "medium",
          "problem": null
        },
        {
          "videourl": "https://youtu.be/vRbbcKXCxOw",
          "Category": "Tree",
          "Name": "Same Tree",
          "Link": "https://leetcode.com/problems/same-tree/",
          "Id": 61,
          "Level": "easy",
          "problem": "<p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p>\n\n<p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg\" style=\"width: 622px; height: 182px;\" />\n<pre>\n<strong>Input:</strong> p = [1,2,3], q = [1,2,3]\n<strong>Output:</strong> true\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg\" style=\"width: 382px; height: 182px;\" />\n<pre>\n<strong>Input:</strong> p = [1,2], q = [1,null,2]\n<strong>Output:</strong> false\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg\" style=\"width: 622px; height: 182px;\" />\n<pre>\n<strong>Input:</strong> p = [1,2,1], q = [1,1,2]\n<strong>Output:</strong> false\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in both trees is in the range <code>[0, 100]</code>.</li>\n\t<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/OnSn2XEQ4MY",
          "Category": "Tree",
          "Name": "Invert/Flip Binary Tree",
          "Link": "https://leetcode.com/problems/invert-binary-tree/",
          "Id": 62,
          "Level": "easy",
          "problem": "<p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg\" style=\"width: 500px; height: 165px;\" />\n<pre>\n<strong>Input:</strong> root = [4,2,7,1,3,6,9]\n<strong>Output:</strong> [4,7,2,9,6,3,1]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg\" style=\"width: 500px; height: 120px;\" />\n<pre>\n<strong>Input:</strong> root = [2,1,3]\n<strong>Output:</strong> [2,3,1]\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li>\n\t<li><code>-100 &lt;= Node.val &lt;= 100</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/u4JAi2JJhI8",
          "Category": "Tree",
          "Name": "Serialize and Deserialize Binary Tree",
          "Link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
          "Id": 65,
          "Level": "hard",
          "problem": "<p>Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.</p>\n\n<p>Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>\n\n<p><strong>Clarification:</strong> The input/output format is the same as <a href=\"https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-\" target=\"_blank\">how LeetCode serializes a binary tree</a>. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg\" style=\"width: 442px; height: 324px;\" />\n<pre>\n<strong>Input:</strong> root = [1,2,3,null,null,4,5]\n<strong>Output:</strong> [1,2,3,null,null,4,5]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = []\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>\n\t<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/gs2LMfuOR9k",
          "Category": "Tree",
          "Name": "Lowest Common Ancestor of BST",
          "Link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
          "Id": 70,
          "Level": "easy",
          "problem": "<p>Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.</p>\n\n<p>According to the <a href=\"https://en.wikipedia.org/wiki/Lowest_common_ancestor\" target=\"_blank\">definition of LCA on Wikipedia</a>: &ldquo;The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants (where we allow <strong>a node to be a descendant of itself</strong>).&rdquo;</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png\" style=\"width: 200px; height: 190px;\" />\n<pre>\n<strong>Input:</strong> root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> The LCA of nodes 2 and 8 is 6.\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png\" style=\"width: 200px; height: 190px;\" />\n<pre>\n<strong>Input:</strong> root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.\n</pre>\n\n<p><strong class=\"example\">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> root = [2,1], p = 2, q = 1\n<strong>Output:</strong> 2\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is in the range <code>[2, 10<sup>5</sup>]</code>.</li>\n\t<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>\n\t<li>All <code>Node.val</code> are <strong>unique</strong>.</li>\n\t<li><code>p != q</code></li>\n\t<li><code>p</code> and <code>q</code> will exist in the BST.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/asbcE9mZz_U",
          "Category": "Tree",
          "Name": "Word Search II",
          "Link": "https://leetcode.com/problems/word-search-ii/",
          "Id": 73,
          "Level": "hard",
          "problem": "<p>Given an <code>m x n</code> <code>board</code>&nbsp;of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.</p>\n\n<p>Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/07/search1.jpg\" style=\"width: 322px; height: 322px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;o&quot;,&quot;a&quot;,&quot;a&quot;,&quot;n&quot;],[&quot;e&quot;,&quot;t&quot;,&quot;a&quot;,&quot;e&quot;],[&quot;i&quot;,&quot;h&quot;,&quot;k&quot;,&quot;r&quot;],[&quot;i&quot;,&quot;f&quot;,&quot;l&quot;,&quot;v&quot;]], words = [&quot;oath&quot;,&quot;pea&quot;,&quot;eat&quot;,&quot;rain&quot;]\n<strong>Output:</strong> [&quot;eat&quot;,&quot;oath&quot;]\n</pre>\n\n<p><strong class=\"example\">Example 2:</strong></p>\n<img alt=\"\" src=\"https://assets.leetcode.com/uploads/2020/11/07/search2.jpg\" style=\"width: 162px; height: 162px;\" />\n<pre>\n<strong>Input:</strong> board = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;]], words = [&quot;abcb&quot;]\n<strong>Output:</strong> []\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == board.length</code></li>\n\t<li><code>n == board[i].length</code></li>\n\t<li><code>1 &lt;= m, n &lt;= 12</code></li>\n\t<li><code>board[i][j]</code> is a lowercase English letter.</li>\n\t<li><code>1 &lt;= words.length &lt;= 3 * 10<sup>4</sup></code></li>\n\t<li><code>1 &lt;= words[i].length &lt;= 10</code></li>\n\t<li><code>words[i]</code> consists of lowercase English letters.</li>\n\t<li>All the strings of <code>words</code> are unique.</li>\n</ul>\n"
        },
        {
          "videourl": "https://youtu.be/itmhHWaHupI",
          "Category": "Heap",
          "Name": "Find Median from Data Stream",
          "Link": "https://leetcode.com/problems/find-median-from-data-stream/",
          "Id": 76,
          "Level": "hard",
          "problem": "<p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.</p>\n\n<ul>\n\t<li>For example, for <code>arr = [2,3,4]</code>, the median is <code>3</code>.</li>\n\t<li>For example, for <code>arr = [2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>\n</ul>\n\n<p>Implement the MedianFinder class:</p>\n\n<ul>\n\t<li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li>\n\t<li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li>\n\t<li><code>double findMedian()</code> returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;MedianFinder&quot;, &quot;addNum&quot;, &quot;addNum&quot;, &quot;findMedian&quot;, &quot;addNum&quot;, &quot;findMedian&quot;]\n[[], [1], [2], [], [3], []]\n<strong>Output</strong>\n[null, null, null, 1.5, null, 2.0]\n\n<strong>Explanation</strong>\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianFinder.addNum(3);    // arr[1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>-10<sup>5</sup> &lt;= num &lt;= 10<sup>5</sup></code></li>\n\t<li>There will be at least one element in the data structure before calling <code>findMedian</code>.</li>\n\t<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>addNum</code> and <code>findMedian</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong></p>\n\n<ul>\n\t<li>If all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>\n\t<li>If <code>99%</code> of all integer numbers from the stream are in the range <code>[0, 100]</code>, how would you optimize your solution?</li>\n</ul>\n"
        }
      ]
      
]
export default Questions;