const chapters = [
  {
    title: 'A practical view of engineering',
    text: `Engineering is a way of asking useful questions about the world. What is the problem? Who experiences it? What conditions shape it? Which parts can be changed, and what evidence would show that a change helped? I am drawn to this way of thinking because it joins curiosity with responsibility. A useful solution has to work in a real setting, where time, materials, skills, electricity, connectivity and maintenance all matter. The first elegant idea is not necessarily the one that serves people best. I want my work to make room for observation, careful reasoning and the willingness to revise an assumption.

My interests cross electrical engineering, software, artificial intelligence, robotics and mechatronics. These fields are connected by systems. A digital interface depends on software, data and decisions about people. A connected device depends on electronics, firmware, sensing, power and communication. A robot depends on mechanical design, controls, embedded code and an understanding of the environment where it will operate. Looking across these boundaries helps me notice where a solution may fail and where a simple improvement could make it more useful.

Practical engineering begins with listening and studying the setting. A problem statement can hide several different needs. A shop owner may describe stock as the difficulty, while the underlying challenge is an inconsistent routine for recording sales. A construction buyer may ask for a marketplace, while the deeper need involves confidence in availability, price and delivery. The right response depends on discovery, not on how quickly a technology can be added. I want to learn from users, partners and domain experts before committing to a design.

The work also includes deciding what not to build. Scope matters because every extra feature adds decisions, implementation effort, maintenance and possible failure. A small first version can test one clear assumption. Its purpose is to make learning possible, not to claim that the whole problem has been solved. A prototype should answer a question. A product should support a repeatable task. A venture should connect that value to a way of sustaining the work. Keeping these stages distinct helps me describe progress honestly.

I value evidence over presentation. A convincing portfolio can show intention, but it cannot replace a working demonstration, a careful evaluation or a thoughtful explanation of limitations. I want to communicate what is known, what is still uncertain and what the next experiment could clarify. This attitude makes collaboration easier because other people can see where their experience or expertise would help. It also keeps ambition useful: a large goal becomes a set of manageable decisions that can be examined and improved.`
  },
  {
    title: 'Software as a useful system',
    text: `Software engineering interests me because code can turn a repeated task into a dependable process. The value is not in the number of screens, frameworks or lines of code. The value is in whether a person can complete a meaningful job with less confusion and whether the system remains understandable when it changes. That includes the interface, the data model, the backend, permissions, error handling and the habits needed to maintain the product after its first release.

I think about software from the user's task backward. What information do they have at the beginning? What choice are they trying to make? What should happen when they make a mistake, lose a connection or return later? What should the system remember, and what should it avoid collecting? These questions guide the structure of an application more reliably than starting with a list of fashionable features. They also help distinguish a real workflow from a collection of screens that looks complete but does not support the work.

Backend systems deserve the same care as the visible interface. Data should have a clear meaning, relationships should be explicit and failures should be understandable. Authentication, access control, validation and backups are part of the product experience because they shape trust. Good software also needs a path for change: code organized so another developer can follow it, interfaces that do not create unnecessary coupling and decisions recorded well enough to revisit. These qualities may be less visible than design, but they determine whether a product can grow without becoming fragile.

I am interested in tools that help people make better use of information. A dashboard is useful only when it answers a question the user actually has. A notification is useful only when it arrives at a moment when someone can act. A search feature is useful only when the content is organized well enough to retrieve. Each feature should earn its place by improving a task, reducing uncertainty or making a system easier to operate.

My preferred rhythm is to make a small change, inspect its effect and adjust. That rhythm works for a visual detail as well as an API or a data structure. It makes room for feedback before decisions become expensive to reverse. It also supports learning: a developer can explain why a feature exists, what assumption it depends on and how it might be evaluated. I want the software I build to be practical, legible and respectful of the people who rely on it.`
  },
  {
    title: 'Artificial intelligence with purpose',
    text: `Artificial intelligence is most interesting to me when it can help with a real activity and when its role is clearly defined. A model can summarize, classify, retrieve, suggest or assist with a decision, but those abilities do not make a product useful by themselves. The surrounding system matters: the information it receives, the task it is asked to support, the way a person reviews its output and the behavior when the answer is uncertain or wrong. I want to explore AI as one part of a working service rather than as a feature added for appearance.

An intelligent assistant should reduce effort without hiding important choices. A small business owner should be able to understand what a tool recorded, correct it and decide what to do next. A user should know when an answer is generated, what information it used and when human judgment remains necessary. Interfaces can make these boundaries visible through clear language, useful confirmations and an easy path to review or undo an action. The goal is to keep people in control while letting automation handle appropriate parts of a routine.

The quality of the information matters as much as the model. A system cannot reliably answer questions about activity that was never recorded or was stored inconsistently. Data needs context, definitions and a suitable level of detail. Before adding an AI layer, I would want to understand the workflow and the records it depends on. Sometimes a structured form, a search tool or a simple rule is more dependable, easier to maintain and easier for a user to trust. Choosing a less complex approach can be the better engineering decision.

Agent workflows raise additional design questions. A system that can take multiple steps needs boundaries around what it may read, change or send. Its actions should be observable, and high-consequence steps should remain reviewable by a person. The design should handle missing information, conflicting instructions and failed operations without pretending that an uncertain result is correct. Good orchestration is not only about completing a sequence. It is about making the sequence understandable and recoverable.

I want to keep learning how to evaluate intelligent systems in realistic conditions. That includes checking usefulness, consistency, privacy, accessibility and failure behavior. A successful demonstration is only a starting point. The more important question is whether the system supports people across ordinary use, edge cases and changing needs. My interest is in practical AI that complements human judgment and can be explained clearly to the people it serves.`
  },
  {
    title: 'Robotics and mechatronics',
    text: `Robotics and mechatronics bring several kinds of engineering into one place. A machine has physical parts, electrical power, sensors, actuators, control logic, software and a job to perform in an environment that may not behave as expected. The challenge is not only to make a mechanism move. It is to make the full system useful, safe, understandable and maintainable. I am interested in learning how these parts influence one another and how a change in one area affects the rest.

The environment is an important part of the design. A robot intended for a clean demonstration space may behave differently on uneven ground, around dust or near people. Agricultural settings introduce variation in crops, weather, terrain and available infrastructure. A practical system has to account for constraints such as power, repair skills, replacement components and the time a person can spend operating it. Understanding these conditions early helps focus a project on a credible task rather than a dramatic but poorly defined capability.

Prototyping is valuable because physical assumptions become visible quickly. A rough mechanism can reveal that an object is difficult to grasp, a sensor is poorly placed or a movement is not stable. Tests should be designed around specific questions: can the device detect a condition, move through a defined space or repeat an action with enough consistency for a person to evaluate it? A prototype does not need to be polished to teach something, but the purpose of the test should be clear.

Control systems connect sensing and action. A controller receives information, estimates what is happening and chooses an output. That cycle depends on sensor quality, timing, calibration and a useful model of the environment. Delays and noise can change the result. When a system fails, a useful design makes it possible to stop safely, understand the failure and restore normal operation. These considerations belong in the initial architecture rather than being treated as final details.

I am especially curious about where robotics can support practical work without pretending that automation is always the answer. Some tasks may benefit from a machine, while others may be improved through better tools, clearer information or a modest change to a process. A good project compares these options. I want to develop the judgment to select an appropriate level of automation and the technical skill to build systems whose purpose is clear to the people who work alongside them.`
  },
  {
    title: 'Embedded systems and electrical engineering',
    text: `Embedded systems connect software to physical devices. A microcontroller can read a sensor, control an output and communicate with another system, but each step has practical constraints. Memory and processing power may be limited. A device may run from a battery, face electrical noise or operate without a dependable network connection. Firmware must handle startup, timing, unexpected readings and recovery. These details make embedded development a useful meeting point for programming, electronics and careful testing.

The first questions are often about the environment and the task. What does the device need to sense? How accurate does the measurement need to be? How frequently should it sample? What should it do when the reading is missing or outside an expected range? How will someone know that the device is operating correctly? Answering these questions helps choose sensors, power arrangements, communication methods and physical enclosures. It also prevents a prototype from depending on conditions that will not exist after a demonstration.

Electrical engineering provides the foundation for understanding signals, circuits, power and control. Components have limits, connections have consequences and measurement requires appropriate tools and methods. A circuit that works once on a bench may need additional protection or a different layout to work reliably over time. The design should consider heat, current, voltage, grounding and the possibility of incorrect connections. Documentation and repeatable tests make it easier to diagnose behavior without relying on memory.

Connected devices add questions about communication and security. A sensor reading may travel over a local link or a network to a service where it can be stored and used. That path should be reliable enough for the intended job and should not expose data or controls unnecessarily. A device that loses its connection needs an intentional behavior. It may store information for later, continue a safe local task or alert someone that intervention is required. The correct choice depends on what the device is meant to do.

My interest is in integration: making hardware and software behave as one understandable system. The device, firmware, interface and service should agree about data formats, states and errors. Building this agreement takes planning and testing across boundaries. It also creates opportunities to make practical tools that can be repaired and adapted. I want to keep building the knowledge to select components thoughtfully, prototype safely and explain how a device works to the people who use or maintain it.`
  },
  {
    title: 'Technology entrepreneurship and Dysen',
    text: `Technology entrepreneurship begins with a problem worth understanding. A venture is not only a name, a product idea or a collection of technologies. It is an effort to connect a real need to a solution people can use and a way to sustain the work. That requires curiosity about users, patience with uncertainty and discipline in choosing what to test. It also means being willing to change direction when evidence suggests that an initial assumption was mistaken.

As the founder of Dysen, I am working towards practical technology solutions across software, artificial intelligence and engineering. The venture gives me a place to explore how digital systems and physical engineering can complement one another. I want the work to begin with needs that can be described clearly and to progress through prototypes that make assumptions visible. At this stage, the right language is development and exploration. The ideas are being shaped; they should not be presented as completed products or proven outcomes.

Early product work benefits from speaking with people who know the problem firsthand. A conversation can clarify how often a task occurs, what people currently do, where mistakes happen and what a better outcome would mean. That understanding can be turned into a small experiment. A paper sketch, workflow, clickable prototype or technical proof can help test a question before a larger investment is made. Each experiment should have a purpose and a way to interpret what is learned.

Business thinking and engineering thinking support each other. Engineering asks whether a system can work under stated constraints. Entrepreneurship asks whether the solution matters enough to be adopted and sustained. A product may be technically possible but difficult to maintain, expensive to deliver or poorly matched to existing habits. These are not separate concerns to address after development. They influence scope, architecture and operations from the beginning.

I want Dysen to be associated with thoughtful, practical work. That means being clear about what is ready, what is being explored and where collaboration would make a difference. It means valuing research, execution and follow-through. It also means measuring progress through useful learning and concrete milestones rather than promises. The long-term ambition is to build technology that solves meaningful problems, while the immediate responsibility is to make each next step specific, honest and achievable.`
  },
  {
    title: 'Notes on the featured projects',
    text: `Dysen is the technology venture through which I am exploring practical work across software, intelligent systems and engineering. Its direction is still developing. The useful next step for any concept is to define a real user, a clear need and a small outcome that can be tested. A venture can contain several ideas, but each idea should have its own problem statement and learning plan. Keeping those pieces distinct will help the work grow without overstating what has already been built.

Nguzo is a construction commerce concept designed around making building materials easier to discover and access. The idea connects builders and material suppliers. To develop it responsibly, I would need to understand how people currently locate products, compare availability and arrange delivery. The design would need to account for how listings stay current, how suppliers represent their offerings and what information helps a buyer make a decision. Trust and practical operations are central to the concept. At this stage, it remains an early concept rather than a launched marketplace.

Sahl is an AI business assistant concept for small retail businesses. Its intended areas include recording transactions, managing stock, tracking debts and helping owners understand business performance. These tasks depend on clear records and routines that are simple enough to maintain. The assistant should support the owner's work, make corrections possible and explain where information comes from. Any intelligent summary would be only as useful as the records behind it. The project is in development, and the description communicates its intended direction rather than a claim about current adoption or results.

Siafu is a robotics initiative exploring agricultural automation. The starting point is a broad field of questions: which activity could benefit from assistance, what conditions shape the task and what form of machine would be practical to test? Agriculture is diverse, so a solution needs context from people who understand the crop, equipment and environment. A small, safe prototype may help answer a defined question before any larger system is considered. Siafu is currently an exploration, and its value at this stage is in identifying useful directions for learning.

These projects share an interest in practical problem solving, but they should not be treated as interchangeable. Construction commerce, retail operations and agricultural robotics have different users, workflows and constraints. Each requires its own research, design choices and measures of usefulness. I want to keep their status visible and their descriptions precise. When a project reaches a new stage, the portfolio can change to reflect tangible progress, such as a working prototype, a documented test or a resource someone can inspect.`
  },
  {
    title: 'Learning, leadership and community',
    text: `I am currently a student, and learning is a central part of my engineering journey. Study gives me a foundation for understanding systems, while projects give me opportunities to apply ideas and notice what I still need to learn. I want to approach both with discipline: ask questions, work through the reasoning, seek feedback and return to difficult topics rather than relying on quick impressions. A portfolio should show this process honestly and make room for growth.

As a STEM Lead at SADG Company, I support young people in exploring science, technology, engineering and mathematics. STEM becomes more approachable when learners can connect an idea to something they can observe or make. A clear explanation, a practical example and an invitation to experiment can help turn a difficult subject into a question worth pursuing. Leadership in this setting includes listening to learners, adapting explanations and making space for curiosity rather than expecting everyone to follow the same path.

Teaching also improves the teacher's understanding. When I explain an idea, I have to separate what I know from what I am assuming. Questions from other people can reveal gaps in an explanation and suggest a more useful example. This exchange makes learning collaborative. It is one reason I value communities where people share work, ask direct questions and help one another improve. Knowledge sharing is not a substitute for technical depth; it is one way to strengthen it.

My teaching session at GDG DevFest Arusha was a community knowledge-sharing experience. I value the opportunity to contribute to a setting where developers and technology enthusiasts learn together. I do not attach invented dates, titles or attendance numbers to this experience. Its place in my journey is simple: it reflects an interest in sharing knowledge and participating in technical communities.

Over time, I want study, leadership and project work to inform one another. The ideas I encounter in engineering can shape what I build. Building can raise questions that guide further study. Teaching can help me explain both. This cycle is more valuable than treating education, work and community as separate labels. It keeps learning connected to practice and reminds me that good technology depends on people exchanging knowledge as well as systems working correctly.`
  },
  {
    title: 'The principles behind my work',
    text: `Curiosity is the habit of asking how something works and what else might be possible. It helps me approach unfamiliar problems without assuming that the first explanation is complete. Curiosity needs direction, though. It becomes useful when it leads to observation, research, experiments and questions that can be answered. I want to keep learning across disciplines while staying focused on the needs of the people and systems involved.

Integrity means representing work honestly. It includes being clear about my capabilities, acknowledging uncertainty and distinguishing a prototype from a finished product. It also means treating information carefully and giving people a truthful account of what a system does. Trust grows when language matches reality. I want the portfolio and the work behind it to make that match visible.

Discipline is how an idea becomes action. A project needs time, a defined next step and the patience to continue through routine work. Motivation can start a task, but habits and priorities help carry it forward. Discipline also includes choosing a realistic scope, finishing a useful part and reviewing what happened. I want to get better at making progress sustainable rather than depending on last-minute effort.

Innovation means looking for better ways to address a need, not adding novelty for its own sake. A solution can be innovative because it combines familiar tools in a thoughtful way, makes a process easier to understand or works within constraints others have overlooked. The test is whether it improves the situation. I want to pair creativity with evaluation so that new ideas can be judged by their value and not only by how different they appear.

Accountability is taking responsibility for decisions, mistakes and outcomes. Systems are built through choices, and those choices affect users, collaborators and maintainers. When something fails, the useful response is to understand what happened, communicate clearly and make an appropriate correction. Accountability also includes following through on commitments and keeping project status accurate. It helps transform setbacks into learning rather than excuses.

Collaboration recognizes that meaningful problems often require different kinds of knowledge. A builder may understand implementation, while a community member or domain specialist understands the context more deeply. Respectful collaboration means listening, making assumptions discussable and giving credit where it belongs. It can improve both the quality of a solution and the experience of making it. I want to work with people who challenge ideas constructively and share responsibility for the result.

Purpose keeps effort connected to what matters. Technology can consume time and resources, so the reason for building should be clear. Purpose asks who benefits, what changes for them and whether the work creates value beyond its appearance. It does not guarantee that an idea will succeed, but it helps guide choices and decide when a different path is wiser. I want to build with intention, learn from results and keep meaningful outcomes at the center.`
  },
  {
    title: 'Resources and shared learning',
    text: `The resource library is a place for material that can help someone learn, explore or build. It is intended to include videos, PDFs, research notes and personal projects. Those formats serve different needs. A video can demonstrate a process or explain an idea aloud. A PDF can organize a guide or reference for later use. Research notes can capture questions, readings and reflections without claiming to be a formal study. A project entry can show an experiment, its purpose and what it taught me.

I want shared resources to be useful on their own. A visitor should be able to tell what a resource covers, who may find it relevant and whether it is an introduction, a practical guide or a record of exploration. Clear titles and short descriptions make discovery easier. For a technical resource, it helps to state the tools or assumptions it relies on and what someone needs before following it. For a project, it helps to explain the problem, the approach and the current status.

Accuracy matters when knowledge is shared. A personal note can be valuable without being presented as research. A prototype can be instructive without being described as production-ready. A video can show a process while acknowledging what is not visible in the demonstration. I want the labels around future resources to communicate their purpose and limits. That makes the library more trustworthy and helps people choose material that matches their needs.

Accessibility is part of usefulness. Written material should be organized with headings, readable contrast and links that make sense out of context. Videos benefit from captions or transcripts where possible. Downloadable files should have clear names and formats. Examples should avoid assuming that every reader has expensive hardware or reliable high-speed access. These are design choices that can help more people learn from the same material.

The library is currently a framework for future sharing rather than a collection of published files. No videos, PDFs or research documents have been added because none were provided for this update. As I prepare material to share, I can add a direct link, a clear description and any context needed to use it. The goal is a growing, organized resource area grounded in real work and learning, not a set of empty claims about content that does not yet exist.`
  },
  {
    title: 'Working together',
    text: `I am open to engineering opportunities, software development, AI and agent work, robotics and mechatronics projects, embedded systems, research, prototyping, consultation and partnerships. A good starting conversation can be simple: what is the problem, who is affected, what has already been tried and what would a useful outcome look like? We can use those questions to understand whether the work fits my skills and what kind of next step would make sense.

Early clarity saves time. A short project outline can describe the goal, the people involved, constraints, existing materials and any deadline that matters. It is also useful to say what is still uncertain. Not every project needs a complete specification before the first discussion, but it helps to distinguish a concrete request from a broad ambition. That allows us to decide whether the next activity should be research, a prototype, a technical review or implementation.

Consultation can help when a team needs to examine an idea before committing to a larger build. That may involve mapping a workflow, comparing technical approaches, identifying dependencies or defining a small test. The purpose is to make decisions clearer. It is not a promise that one technology will solve every part of a problem. A practical recommendation should account for users, operations, cost, maintenance and the skills available to support the system.

Collaboration works best when communication is direct and expectations are clear. Participants should know the roles, responsibilities, decision process and ownership of work. The technical plan should leave room for feedback, especially when people who use the system have not yet been able to try it. If constraints change, the scope can be revisited. This approach respects the time of everyone involved and supports results that are easier to maintain.

If you have a useful challenge in mind, reach out through WhatsApp, email, LinkedIn or Instagram. A few sentences are enough to begin. Tell me what you are trying to improve, who would use the result and what kind of support you are looking for. From there we can explore the problem, identify an appropriate next step and decide whether working together makes sense. I value practical thinking, integrity and purposeful execution in the projects I take on.

Once a project begins, useful communication should continue throughout the work. It helps to agree on how progress will be shared, what decisions need review and how changes to the plan will be handled. Regular demonstrations can make progress tangible and expose misunderstandings early. Notes about decisions help everyone remember why an approach was chosen. When a test reveals a problem, the team can revise the design while the change is still manageable. This kind of collaboration supports both quality and trust.

I also care about what happens after an initial build. A solution may require documentation, training, maintenance or a clear handover. These responsibilities should be considered while planning, because a system that no one can operate or update is not truly useful. The right form of support depends on the project and the people involved. I want to discuss those needs openly and help identify a practical path from an early idea toward a result that can be understood, maintained and improved over time.`
  },
]

export default function ExtendedNotes() {
  return (
    <details className="extended-notes">
      <summary>Explore the extended notes</summary>
      <div className="extended-notes-list">
        {chapters.map(({ title, text }) => (
          <article className="glass extended-chapter" key={title}>
            <h3>{title}</h3>
            {text.split('\n\n').map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
          </article>
        ))}
      </div>
    </details>
  )
}
