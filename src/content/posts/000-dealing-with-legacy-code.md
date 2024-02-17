---
title: "Dealing with legacy code"
pubDate: 2024-01-31
description: "Class aptent taciti sociosque ad litora torquent per conubia nostra, per
inceptos himenaeos. Etiam at quam felis. Duis sed elit a ligula malesuada
imperdiet at eu tellus."
image:
  url: "astro.webp"
  alt: "The full Astro logo."
tags: ["agile","tests","git"]
---

## Boarding on a slippery bridge

By the start of 2023, I found myself assigned to a large-scale, long-term project. It was technically thrilling, featuring numerous micro-services and a wide array of technologies. I knew the talent of previous teams and was eager to discover their work... but I also was well aware that those lands were not roses and silk tough.

A vast code base, a bit of subtle complexity, a pinch of team turnover and a twist of perplexing and fragmented business logic — these clues should be enough to trigger our astute readers — I had just embarked on my very first project dealing with **legacy code**.

### A project at a key crossroads

The project recently faced challenging times as many of the major contributors had moved on to new endeavors. Furthermore, some nasty shortcuts had been taken while teams had a complete understanding of the matter: documentation was scarce as stories definitions were terce. 

Later, as the team renewed itself, all these factors dampened knowledge transmission. It had reached a tipping point that was felt by both technical and product teams as some features were harder or even impossible to deliver. Some important changes had been planned. 

Some were structural, as the client allocated new (and less overworked) internal human resources and the team also welcomed a [facilitator](https://marmelab.com/en/jobs/facilitator/) from marmelab. 

The operational counterpart of this makeover was a sincere will to address the accumulated technical debt, endorsing development resource and initiating some major reworks such as the rewrite of one of the client application.

### Ad astra per aspera*

**From [Virgil](https://en.wikipedia.org/wiki/Virgil), meaning “to the stars through difficulty”*

This does not mean that the backlog had been frozen, all services were lively with major upcoming innovations...

In this context, dealing with technical debt can be perceived negatively. On the one hand, it competes for finite resources with new features delivery. On the other hand, from a developer point of view — let’s face it — most of the tasks induced by this new impulse are, at least, tedious if not unpleasant.

Our team faced those challenges, as many did before us, but you might find some interesting insights from the routines and the mindset we gradually and informally nurtured. So, here I am, trying to formulate a naive four bullet points long boy-scout manual into a peremptory and carved-in-stone philosophy.

## The Way of the Great Spotted Woodpecker

As every boy-scout requires a totem animal, we opted for the woodpecker, first to satisfy my colleague [Arnaud](https://marmelab.com/fr/blog) strange fervor towards this noisy bird, second because of its relentless drumming, however hard the wood. 

> *By the way, let’s bust a myth, [woodpecker brain is not mounted on shock absorbers](https://www.newscientist.com/article/2328724-woodpeckers-dont-have-built-in-shock-absorbers-to-protect-their-brain/) and may subsequently suffer from headaches (…and our professional metaphor still holds on).*

The following personal and collective principles aim at developing positive thinking toward those tasks and at making them sustainable and more efficient. I must confess it also sometimes required autosuggestion but as this psychological technique is [born in Nancy](https://en.wikipedia.org/wiki/%C3%89mile_Cou%C3%A9#:~:text=retired%20to%20Nancy%2C%20where%20he%20opened%20a%20clinic), marmelab hometown, please consider that as a tribute rather than a conceptual flaw.

## The genealogy: Lords of the code

Taking part in a legacy project is claiming your place in a filiation of developers and stakeholders from whom you will inherit good and bad deeds. Do your thing, and later, when your time will come, you will also hand those with further fruit to your successors. This clumsy and abstract lineage consideration translate in three master principles :

##### Rule #1: Pay respect to you predecessors

- At the beginnings of your legacy, take a full grasp of the dominion build by your fellow colleagues. That’s quite a point of view!
- You may encounter convoluted code, accept it as time-tested and covering edge cases or unforeseen end user creativity.

##### Rule #2: Reclaim ownership of the project

- Even lacking of a global vision at present, you’re now a captain on board. 
*Personal note: get rid of your impostor syndrome as a matter of priority.*
- For each facet of the code base, build a sufficient grasp of the topic and don’t fear to question existing implementations.

##### Rule #3: Nurture siblings fraternity

- Raise best practices and honesty within all the project members.
- Extend the collective understanding of the project by effective means.

##### Rule #4: Look at your descendance with benevolence

- Value simplicity at any phase of conception.
- Make the vow that whoever will come after us will follow easier and safer paths.

## The etiquette: Code of the Lords

All principles are sterile without day-to-day operational enforcement.

### Polish your weapons before engaging battlefield

Every Lord needs his sword and yours will be a sufficient test coverage throughout the project. A good testing practice is a reassuring ally to take over chatty code or ~~convoluted~~ time-tested business logic.

To be honest, for a long time, I’ve been a disciple of the “Testing is Doubting” school but this experience converted me. As such I don’t feel neither legitimate nor qualified to explain tests theoretical aspects (and this topic could span four books and a half). 

And, to be perfectly honest, never would have I imagined that achieving a usable testing suite would be so demanding in a silo based micro-services architecture. There stands a kingdom in shades of grey, and, as far as our team is concerned, still a work in progress. We have a lot of work ahead of us to fulfill the following advise:

- Audit the relevance of existing tests and the soundness of your tests ecosystem.
- Protect confidence in you testing suite: fix or quarantine flaky tests.
- Keep the pyramid of tests pyramidal; any difficulty to cover some logic in your code or an abnormally shaped [tests pyramid](https://en.wikipedia.org/wiki/Test_automation#Testing_at_different_levels) should be considered as a symptom for bad design.
- Cover most brittle sections of your code before all others. They are easy to spot, they dwell where the errors are popping from at each release.

### Trust all your fellows

One of the key to success on our path was a 2-ways transparent communication between the development team and the customer.

##### Deal with staggered tasks

Some tasks may be too resource-consuming for the moment being; to keep track of them, developers have been granted creation of issues in the product backlog.

##### Allocate time to technical debt

If these maintenance and refactoring issues were not being actually included in sprints they would remain wishful thinking. I am grateful to work with product owners that really value their importance!

##### No hidden fees

Reciprocity in this matter means that development team do not hide technical debt or heavy refactoring within other issues.

##### Nurture enthusiasm

In a novelty-driven world, don’t forget to give importance to life-saving novelty-sterile accomplishments within your team, such as disambiguation, documentation or refactoring. Welcome them with the respect they deserve in face-to-face or indirect exchanges (see forthcoming section on pull requests).

### The refactoring cult: curb the growth of entropy

When implementing a new feature, it might be tempting to tweak and twist current code with minimal implications to adjust to new requirements while leaving the lightest imprint and the least chance of adding a bug in what was functional. 

Let’s state the obvious, the [mikado](https://en.wikipedia.org/wiki/Mikado_(game)) strategy is reliable only on the very short term.

##### Value simplicity

I recently attended a speech by [Bertrand Delacrétaz](https://www.linkedin.com/in/bdelacretaz/) on simplicity. I really liked how he pointed out that simplicity is often the runt of the litter in the IT industry. We take pride in trendy architectures or frameworks, often praise innovation per se, but only too rarely consider a **sufficient yet simple solution**. Simplicity could be raised as an acceptance test, in facts, never is it.

##### …and KISS it day after day

Nowhere is simplicity more expected than in large code base when disentangling a feature spanning 4 years and two generous dozens of pull requests. As it is said ([and proven](https://futurism.com/neoscope/sports-cars-penis-size)) that sport cars compensate for some lacks; fancy patterns and mysteriously appealing naming conventions are the signature moves of developers lacking of *[still to be determined].*

Simplicity should be a mantra of our practice as developers - have you considered getting a tattoo? 

##### The perfect solution fallacy

Don’t let dogmatism restrains your team agility. Even incomplete, any improvement done now is a step toward a cleaner code base. Simplicity is also an iterative process, the changes made today will shed light for later reworks. 

> **Disclaimer**
At the end, don’t forget to report on the dirt leftover under the carpet for collective tracking, then forget everything about it to foster your mental ~~health~~ charge.

### The code documentation paradox

The aging of any software requires methodology transitions following its stages of development; an innovative [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) has neither the complexity nor the documentation need of a mature project under tierce maintenance applicative. Legacy code scale escalates the conflicts inherent to documentation:

- Nowhere is it more expansive to create and harder to keep up-to-date.
- Nowhere is it more helpful.

##### Self-explanatory code

One of the Manifesto for Agile Software Development principle prioritizes [Working software over comprehensive documentation](https://agilemanifesto.org/#:~:text=Working%20software%20over%20comprehensive%20documentation). 

- To begin please let me make it cristal clear for our most inflexible readers, that DOES NOT forbid to add a few comments to explain an inintuitive yet required code or to refer to a specific documentation. Have pity on future maintainers! — or on yourself in three weeks!
- I could never emphasis enough on the benefits provided by the progressive and silky migration of our applications to TypeScript (BTW with the help of [ts-migrate](https://www.notion.so/b4588ec5945f4e83aa8612f773299984?pvs=21)) — if not done yet, just do it.
- Naming conventions are a daily pain in our ~~ass~~ case (but that’s pretty common according to [Phil Karlton](https://www.karlton.org/2017/12/naming-things-hard/)). We came across a lot of [common language](https://www.scrum.org/resources/establishing-common-language-scrum-team) discrepancies along the code base, meanings and functionalities having drifted over the years, this phenomenon being amplified within [information silos](https://en.wikipedia.org/wiki/Information_silo) and linked micro-services from whom you inherit another layer of legacy and rigidity. We opted for the reed strategy, as in [the oak and the reed](https://en.wikipedia.org/wiki/The_Oak_and_the_Reed). We keep consistant and meaningful what we are responsible for and tolerate consistant but meaningless what we can’t change. 

##### The art of the pull request

The pull request is a core aspect of our daily work as developers but it is often under-invested in terms of time and care. 

However they are real a very good way to document changes over the time and to share knowledge across the team. A well couched pull request will also encourage better pair reviews as they provide an easily available context.

There are many improvements that can be applied (or not, according to need) to enhance your pull requests : 

- Build a meaningful Git history with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Add a screenshot or a screen capture whenever possible to illustrate new feature or behavior
- List sub-tasks when they exists
- Self-comment edited file to facilitate reviewers task and let them focus on the essential
- Justify minor design choices in the pull request description — if you don't already use [Architecture Decision Records](https://adr.github.io/)
- Give [conventional comments](https://conventionalcomments.org/) a try to encourage deeper exchanges around reviews — Arnaud wrote a post about it [here](https://marmelab.com/blog/2024/01/05/crystal-clear-reviews-with-conventional-comments.html)

We really hope that this work will allow more efficient investigations in the future (think of the`git blame` command) with contextual and deluxe information.

##### The art of the issue

Good pull requests can’t exist without good, unbiased, open-minded and context-providing issues (rather than technical, out of context but know-it-all ones). The former will involve the team toward a discussed and balanced solution and will trigger educated reviews. The latter will undermine team involvement and proficiency. Kudos to Agathe and Virginie for their continuous effort toward lavish issues!

##### Doc is not dead

The last three aforementioned points allow a common and perennial documentation of day-to-day matter at a very affordable cost sparing resources for more traditional documentation maintenance (untangle, prune and report).

### For every cult, its rituals

To grow a better collective understanding of the project, we experienced some on-demand agile routines.

##### Pair programming

That’s absolutely obvious but how to solve better a multipart problem whose knowledge is shared between members than gathering members around the same screen? Beside the technical benefits, we can observe the  motivational ones when dealing with conundrum and thorny issues.

For some transversal topics, we would like to experience mob programming (2+) that we expect to be the ultimate feature deployment overkill.

##### The technical daily

It consists in a meeting gathering the development team. It is usually driven by a few agenda items given as far in advance as possible to allow everyone to catch up with the topic if willing to. The duration is free but aims at remaining short. 

It has proven efficient to:

- limit tunnel effect when dealing with a complex ticket
- share and gather partial and distributed knowledge
- discuss a priori technical choices and prevent unforeseen side effects

## Conclusion

I would like to conclude this verbose feedback from a more personal point of view. Dealing with these challenges have been a very professionally structuring experience on many aspects.

Considering a technical and theoretical facet, it just scaled up my perception of computer science problematics. Having been for a long time a lonesome freelancer working on complex but short-term projects, topics I thought I had a good grasp are developping a new dimension... I expect a decade long study on tests to conduct, and two other decades to glimpse simplicity. Nothing unsurmountable.  

On the other hand, I experienced an in vivo experience of an agile and human-centered management. I am truly grateful belonging to this team (including the product owners on the customer side), who has been able to apply course corrections on-flight, to question itself and to be curious and dedicated about others practices. We tried many routines, kept alive a few that worked and were sustainable. Adjusted and reiterated, etc.

Of course, some (most?) of the points evoked here are still work in progress,but if I had to redo it today, I would gladly join the team. I’m sure taking over this gigantic code base would be easier… 

Oh wait, isn’t it what we have been working at?
