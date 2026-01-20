interface ServiceType {
  id: number;
  heading: string;
  text: string;
}

const ServiceSection = () => {

  const services: ServiceType[] = [
    {
      id: 1,
      heading: "Team Matching System",
      text: "Founders can create projects with a name, description, category, problem, roles, skills, and timeline; users can discover talent by skills, roles, or availability and request to join teams; team pages display members, open roles, chat, and progress; users can join projects, and founders can remove members."
    },
    {
      id: 2,
      heading: "Hackathon System",
      text: "Ecosystems or companies can create hackathons with a name, theme, description, timeline, judges, mentors, prizes, and submission guidelines; users can register solo or as teams; teams can submit project links, GitHub repos, videos, presentations, and descriptions; judges can score, comment, and select winners; hackathon dashboards display rules, announcements, timeline, teams, submissions, and messages."
    },
    {
      id: 3,
      heading: "Project Pages",
      text: "Each project has a dynamic page showing its description, category, screenshots, videos, team, progress, and roadmap; teams can publish text, images, links, and demo updates; users can follow projects, like updates, and comment."
    },
    {
      id: 4,
      heading: "Social Feed",
      text: "Users can create posts with text, images, links, and updates; they can like, comment, and share posts, and filter their feed by hackathon, project, skills, or trending."
    },
    {
      id: 5,
      heading: "Incubator System",
      text: "Teams apply by submitting an MVP link, pitch deck, team members, and market summary; they receive weekly tasks, deadlines, and mentor feedback, while admins can track progress, deliverables, and growth metrics."
    },
    {
      id: 6,
      heading: "Messaging System",
      text: "Users can chat via direct messages with text, images, and links; team chats exist within projects, and notifications cover invites, messages, likes, comments, and hackathon updates."
    },
    {
      id: 7,
      heading: "Admin Dashboard",
      text: "Admins can approve hackathons and investor accounts, review reports, ban users, view analytics, edit categories, and feature projects."
    }
  ]

  return (
    <section className="section flex justify-center items-center">
        <div className="block">
            <h1 className="font-bold lg:text-5xl text-textFocus text-center">Services</h1>
            <div className="flex flex-wrap justify-center gap-13 mt-13">
              {
                services.map(service => {
                  const {id, text, heading} = service;
                  return (
                    <div key={id} className="w-85">
                      <h3 className="text-center text-textFocus text-2xl mb-5">{heading}</h3>
                      <p className="lg:text-[16px]">{text}</p>
                    </div>
                )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default ServiceSection