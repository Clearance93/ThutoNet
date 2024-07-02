const booksList = document.getElementById('booksList');
const bookDetails = document.getElementById('bookDetails');
const searchInput = document.getElementById('searchInput');

const libraryBooks = [
    { title: 'Hide and seek', author: 'by Olivia Wilson', genre: 'Fiction', year: 2022, description: "In 'Hide and Seek' by Olivia Wilson, delve into a gripping tale where secrets buried deep within a quaint town threaten to unravel lives intertwined in a web of mystery and deception. As childhood friends reunite after years apart, they find themselves caught in a sinister game where the past refuses to stay hidden. With each twist and turn, the stakes escalate, forcing them to confront dark truths that could shatter their fragile bond forever. Wilson's narrative weaves suspense with poignant reflections on friendship, loyalty, and the consequences of unearthing buried secrets.", cover: '/Images/Hide and seek.webp' },
    { title: 'The Ultimate Anxiety Free Collection', author: 'Christompher Moss', genre: 'Non-fiction', year: 2021, description: "In 'The Ultimate Anxiety Free Collection' by Christopher Moss, embark on a transformative journey towards overcoming anxiety and reclaiming peace of mind. Moss, drawing from extensive research and personal experiences, offers a comprehensive guide filled with practical strategies and insights tailored to empower readers in their battle against anxiety. Through a blend of mindfulness techniques, cognitive-behavioral strategies, and holistic approaches, Moss equips readers with tools to effectively manage stress, cultivate resilience, and foster a deep sense of inner calm. Whether tackling everyday stressors or more profound challenges, this collection serves as a beacon of hope and empowerment for anyone seeking to live a life free from the grips of anxiety.", cover: '/Images/Ultimate-Anxiety-Free.jpg' },
    { title: 'Carrie Annes Word', author: 'Mrk Whiteway', genre: 'Science Fiction', year: 2020, description: "In 'Carrie Anne's Word' by Mark Whiteway, embark on a thrilling journey through the cosmos where the fate of worlds hinges on the discovery of a lost word. Set in a future where humanity has spread among the stars, Carrie Anne, a brilliant linguist, uncovers ancient prophecies buried within forgotten languages. As she deciphers cryptic texts and navigates interstellar intrigue, Carrie Anne becomes entangled in a web of alliances and betrayals that could reshape the fabric of galactic civilization. Whiteway's narrative blends rich world-building with philosophical inquiries, offering readers a captivating exploration of language, destiny, and the boundless possibilities of the universe.", cover: '/Images/Carries Annes world.png' },
    { title: 'The Tempest book 1 tide of season', author: 'Aaron James holland', genre: 'Fantasy', year: 2019, description: "In 'The Tempest: Book 1 - Tide of Seasons' by Aaron James Holland, enter a world where ancient magic and elemental forces shape the destiny of nations. As the seasons shift, so too does the balance of power between rival factions vying for control over a realm torn by centuries-old conflicts. Amidst swirling tides and tempestuous skies, heroes and villains alike navigate treacherous alliances and unearth long-buried secrets that threaten to unleash chaos upon the land. Holland's narrative weaves together epic battles, mystical revelations, and the enduring quest for redemption, offering readers a captivating journey into a realm where every action echoes across the ages.", cover: '/Images/Aaron James.jfif' },
    { title: 'The Dark side of winder', author: 'Morgan Maxwell', genre: 'Mystery', year: 2018, description: "In 'The Dark Side of Winter' by Morgan Maxwell, delve into a chilling mystery set against the backdrop of a remote winter landscape. When a series of inexplicable events shroud a quaint village in darkness, Detective Sarah Winters must unravel the enigmatic clues that tie together a string of unsettling disappearances. As she delves deeper into the shadows of the community, long-buried secrets surface, revealing a web of deceit and betrayal that threatens to consume all who dare to uncover the truth. Maxwell's narrative blends atmospheric suspense with intricate character dynamics, crafting a gripping tale that keeps readers on the edge of their seats until the final revelation.", cover: '/Images/Dark side.webp' },
    { title: 'ThutoNet Dev book', author: 'Clearance Morumudi', genre: 'Education', year: 2018, description: "In 'ThutoNet Dev book' by Clearance Morumudi, embark on a journey into the world of educational development where innovation meets necessity. Aspiring developers join the ThutoNet team to tackle complex challenges and enhance learning experiences for students worldwide. Morumudi intricately weaves together technical expertise with a passion for education, offering insights into the creation of intuitive platforms that empower both educators and learners alike. This book serves as a comprehensive guide, showcasing the transformative impact of technology in shaping the future of education.", cover: '/Images/Dev book.png' },
    { title: 'The great Controversy', author: 'E.G White', genre: 'Christian', year: 2018, description: "In 'The Great Controversy' by E.G. White, explore the profound theological narrative that delves into the timeless conflict between good and evil. White skillfully examines pivotal moments in history, revealing how these moments shape the ongoing struggle between divine truth and spiritual deception. Through compelling prose, she invites readers to contemplate the overarching themes of salvation, faith, and the ultimate triumph of righteousness. This profound work not only elucidates historical events but also offers profound insights into the spiritual battles that continue to shape human destiny.", cover: '/Images/great-controversy-2023-new-cover.webp' },
    { title: 'Nothing but the truth', author: 'John Kani', genre: 'Education/English', year: 2018, description: "John Kani's 'Nothing but the Truth' delves into the complexities of familial relationships and personal integrity. Set against the backdrop of modern South Africa, the novel explores the intricacies of love, betrayal, and the quest for identity. As protagonist Sipho navigates the fallout from a family scandal involving his stepdaughter and his own brother, the narrative unfolds with poignant introspection and cultural resonance. Kani masterfully weaves together themes of loyalty, forgiveness, and the enduring search for truth in a rapidly changing society.", cover: '/Images/Nothing but truth.webp' },
    { title: 'Timely greeting the only peace of mind', author: 'V.Hoeteff', genre: 'Christian', year: 2018, description: "V. Hoeteff's 'Timely greeting' delves into profound theological questions surrounding faith, righteousness, and the eternal struggle between good and evil. Set within the context of Christian doctrine, the narrative unfolds as a theological exploration, revealing deep insights into spiritual growth and the divine purpose of humanity. Hoeteff's work resonates with readers seeking to deepen their understanding of Christian beliefs, presenting a narrative that intertwines biblical principles with contemporary reflections on faith and redemption.", cover: '/Images/timely greetings.jpg' },
    { title: 'Technical Mathematics grade 12', author: 'Madeline Trollope, Megan Chtslike and Jolandi Daniels', genre: 'Christian', year: 2018, description: "Madeline Trollope, Megan Chtslike, and Jolandi Daniels' 'Technical Mathematics grade 12' offers a comprehensive approach to mastering mathematical concepts essential for students at the grade 12 level. This textbook covers topics such as algebra, geometry, trigonometry, and calculus, providing clear explanations and practical examples to enhance learning. With a focus on applying mathematical principles to real-world scenarios, Trollope, Chtslike, and Daniels provide a valuable resource for students preparing for academic challenges and future career opportunities in technical fields.", cover: '/Images/TechMaths.jpg' },
    { title: 'Forth Edition Physics', author: 'James S. Walker', genre: 'Christian', year: 2018, description: "James S. Walker's 'Fourth Edition Physics' provides a comprehensive introduction to the fundamental principles of physics, offering clear explanations and engaging insights into the laws that govern the natural world. This textbook covers essential topics ranging from mechanics and thermodynamics to electromagnetism and quantum physics, presenting complex theories in an accessible manner. With practical examples and real-world applications, Walker's authoritative guide serves as an invaluable resource for students and educators alike, fostering a deeper understanding of the principles that shape our universe.", cover: '/Images/Physical science.jpg' },
    { title: 'Technology and Mathematics', author: 'Sven Ove Hansson', genre: 'Christian', year: 2018, description: "Sven Ove Hansson's 'Technology and Mathematics' explores the intricate relationship between technology and mathematical principles, offering a comprehensive analysis of how mathematical concepts underpin technological advancements. This insightful book delves into the applications of mathematics in various technological domains, elucidating complex theories and their practical implications. Hansson's work serves as a vital resource for students, educators, and professionals alike, seeking to deepen their understanding of the symbiotic relationship between technology and mathematics in today's rapidly evolving world.", cover: '/Images/Tech and math.jfif' }
];

function displayBooks(books) {
    booksList.innerHTML = '';
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-item');
        bookElement.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookElement.addEventListener('click', () => showBookDetails(book));
        booksList.appendChild(bookElement);
    });
}

function showBookDetails(book) {
    bookDetails.style.display = 'block';
    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Description:</strong> ${book.description}</p>
    `;
}

function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = libraryBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
}

displayBooks(libraryBooks);
