import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR, SET_TOKEN } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  token: undefined,
//   isAuthenticated: !!JwtService.getToken()
  isAuthenticated: false
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  async [LOGIN](context, credentials) {
      try {
        const { data } = await ApiService.post("/login", credentials)
        // context.commit(SET_TOKEN , data.token);
        context.commit(SET_AUTH, data);
      } catch (err) {
        context.commit(SET_ERROR, err);
      }
      
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  async [REGISTER](context, credentials) {
      try {
        const data = await ApiService.post("signup", credentials)
        context.commit(SET_AUTH, data.user);
      } catch (err) {
          context.commit(SET_ERROR, err);
      }      
  },
  [CHECK_AUTH]({state, commit}) {
    if (JwtService.getToken()) {
      console.log("state.isAuthenticated", state.isAuthenticated)
      if(!state.isAuthenticated){
        ApiService.setHeader();
        ApiService.get("user")
          .then(({ data }) => {
            commit(SET_AUTH, data.user);
          })
          .catch((err) => {
            commit(SET_ERROR, err);
          });
      }
    } else {
      commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, data) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.token = data.token
    state.errors = {};
    JwtService.saveToken(state.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
  [SET_TOKEN](state, token) {
    state.user.token = token;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
