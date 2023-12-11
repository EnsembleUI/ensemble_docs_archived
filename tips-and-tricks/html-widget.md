# HTML Widget with maxLines Support and Enhanced Styling

The HTML widget allows you to apply CSS-like styles to specific elements within the HTML content. Customize text color, font size, and font weight effortlessly using both CSS tags and the box wrapper, providing increased styling flexibility. 

The <div> with an id of "hello" and the <p> with an id of "tag2" are styled with various properties such as border, borderRadius, padding, color, fontWeight, backgroundColor, maxLines, and textOverflow.

- Html:
    id: myHtml
    cssStyles:
        - selector: "#hello"
        properties:
            border: 10px solid red
            borderRadius: 10px
            padding: 20px
        - selector: "#tag2"
        properties:
            color: white
            fontWeight: "900"
            backgroundColor: red
            maxLines: 2
            textOverflow: ellipsis
    text: |
        <div id="hello">
        <p id="tag2">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>

        As Cicero would put it, “Um, not so fast.”

        The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.

        Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.
        </div>