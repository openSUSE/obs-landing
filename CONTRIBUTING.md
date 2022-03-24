# Contributing

We are open for all types of contributions from anyone. Tell us about your [issues/ideas](https://github.com/openSUSE/obs-landing/issues/new), propose code changes via [pull requests](https://help.github.com/articles/using-pull-requests) or contribute artwork and content.

We welcome all new developers and are also prepared to mentor you through your first contributions! All maintainers are seasoned developers and have participated in mentoring programs, such as [GSoC](https://summerofcode.withgoogle.com/) and [RGSoC](https://railsgirlssummerofcode.org/).

We need your input and contributions, in particular we seek the following types:

* **content**: write articles about OBS on our blog
* **content editing**: fix typos, clarify language, and generally improve the quality of our content
* **ideas**: participate in an issues thread or start your own to have your voice heard

Read this guide on how to do that.

## How to contribute code

1. Fork the repository and make a pull-request with your changes
1. One of the maintainers will review your pull-request
    1. If you are already a contributor and you get a positive review, you can merge your pull-request yourself
    1. If you are not already a contributor, one of the existing contributors will merge your pull-request

**However, please bear in mind the following things:**

### Discuss Large Changes in Advance

If you see a glaring flaw within this page, resist the urge to jump into the
code and make sweeping changes right away. We know it can be tempting, but
especially for large, structural changes it's a wiser choice to first discuss
them in the [issue list](https://github.com/openSUSE/obs-landing/issues).

A good rule of thumb, of what a *structural change* is, is to estimate how much
time would be wasted if the pull request was rejected. If it's a couple of minutes
then you can probably dive head first and eat the loss in the worst case. Otherwise,
making a quick check with the other developers could save you lots of time down the line.

Why? It may turn out that someone is already working on this or that someone already
has tried to solve this and hit a roadblock, maybe there even is a good reason
why this particular flaw exists? If nothing else, a discussion of the change will
usually familiarize the reviewer with your proposed changes and streamline the
review process when you finally create a pull request.

### Small Commits & Pull Request Scope

A commit should contain a single logical change, the scope should be as small
as possible. And a pull request should only consist of the commits that you
need for your change. If it's possible for you to split larger changes into
smaller blocks please do so.

Why? Limiting the scope of commits/pull requests makes reviewing much easier.
Because it will usually mean each commit can be evaluated independently and a
smaller amount of commits per pull request usually also means a smaller amount
of code to be reviewed.

### Proper Commit Messages

We are keen on proper commit messages because they will help us to maintain
this code in the future. We define proper commit messages like this:

* The title of your commit message summarizes **what** has been done
* The body of your commit message explains **why** you have done this

If the title is to small to explain **what** you have done, then you can of course
elaborate about it in the body. Please avoid explaining *how* you have done this,
we are developers too and we see the diff, if we do not understand something we will
ask you in the review.

Additional to **what** and **why** you should explain potential **side-effects** of
this change, if you are aware of any.

## Development Environment

To isolate your host system from development we have prepared a container
based development environment, based on [docker-compose](https://docs.docker.com/compose/).
Just run 

```bash
docker-compose up
```

and access the page at http://localhost:4000

## How To

### Add New Members to the Team Page?

Add the following lines at the end of the YAML front matter block:

```
- name: Example Name
  position: Frontend Developer
  email: example@suse.de
  github: examplegithub
  twitter: exampletwitter
  blog: https://examplename.com
  irc: exampleirc
  description: "Write a nice description of yourself.
  You can use **markdown** in ~~the~~ _description_.

  \nAnd add new paragraphs too."
```

You don't need to include all the fields, you can just remove the one you don't want to have.
If you use special characters you may need to surround your text by `"`.
