import axios from 'axios'
export default {
  namespaced: true,
  state() {
    return {
      isLoading:false,
      projects: [
        {
          title: "Design a new website",
          person: "pedram",
          due: "2021-5-10",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "ashkan",
          due: "2021-5-10",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "nima",
          due: "2021-5-10",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "learn vuetify",
          person: "saeed",
          due: "2021-5-10",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a youtube video ",
          person: "nima",
          due: "2021-5-10",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "make a 2000 subcribers from youtube",
          person: "nima",
          due: "2021-5-10",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a android studio project",
          person: "soran",
          due: "2021-5-18",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "learn a android programming",
          person: "saeed",
          due: "2021-10-10",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a java script project",
          person: "soran",
          due: "2021-10-10",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community steam",
          person: "saeed",
          due: "2021-10-10",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  mutations: {
    addProject(state, payload) {
      state.projects.unshift(payload);
    },
    loadProjects(state, payload) {
      state.projects = payload;
      }
  },
  actions: {
    addProject(context, payload) {
      console.log(payload);
      const projectDate = {
        title: payload.title,
        content: payload.information,
        due: payload.date,
        status: "ongoing",
        person: "saeed",
      };
      context.state.isLoading = true
      axios
        .post(
          "https://todo-saeed-app-default-rtdb.firebaseio.com/projects.json",
          projectDate
        )
        .then((res) => {
          console.log(res);
          context.state.isLoading = false
        })
        .catch((err) => console.log(err));
      context.state.isLoading = true
      context.commit("addProject", projectDate);
    },
   
    loadProjects(context ){
      context.state.isLoading= true
      axios.get('https://todo-saeed-app-default-rtdb.firebaseio.com/projects.json')
    .then(response=>{ // then structure : .then((...) => {...})
      const responseData = response.data //responseData is array of objects
       context.state.isLoading=false
      const projects=[]
      for(const id in responseData){
        const project= {
          id: id,
          title : responseData[id].title,
          due : responseData[id].due,
          content : responseData[id].content,
          person : responseData[id].person,
          status : responseData[id].status,

        }
        projects.push(project)
      }
      context.commit('loadProjects', projects)
    })
    .catch(error=>console.log(error))
      context.state.isLoading=false
    }

    //   loadCoaches(context) {
    // const response = await fetch(
    //   `https://main-course-1ba2e-default-rtdb.firebaseio.com/coaches.json`
    // );
    // const responseData = await response.json();

    // if (!response.ok) {
    //   const error = new Error(responseData.message || 'Failed to fetch!');
    //   throw error;
    // }

    // const coaches = [];

    // for (const key in responseData) {
    //   const coach = {
    //     id: key,
    //     firstName: responseData[key].firstName,
    //     lastName: responseData[key].lastName,
    //     description: responseData[key].description,
    //     hourlyRate: responseData[key].hourlyRate,
    //     areas: responseData[key].areas
    //   };
    //   coaches.push(coach);
    // }
    // context.commit('setCoaches', coaches);

    // axios
    //   .get(
    //     `https://main-course-1ba2e-default-rtdb.firebaseio.com/coaches.json` //firebase need vpn
    //   )
    //   .then(response => {
    //     // then structure : .then((...) => {...})

    //     const responseData = response.data;
    //     console.log(responseData);
    //     const coaches = [];
    //     for (const key in responseData) {
    //       const coach = {
    //         id: key,
    //         firstName: responseData[key].coachData.firstName,
    //         lastName: responseData[key].coachData.lastName,
    //         areas: responseData[key].coachData.areas,
    //         description: responseData[key].coachData.description,
    //         hourlyRate: responseData[key].coachData.hourlyRate
    //       };
    //       coaches.push(coach);
    //     }
    //     context.commit('setCoaches', coaches);
    //   });
    //   }
  },
  getters: {
    projects(state) {
      return state.projects;
    },
    isLoading(state) {
      return state.isLoading;
    },
    hasProject(state) {
      if (state.projects && state.projects.length > 0) {
        return true;
      }
    },
  },
};
