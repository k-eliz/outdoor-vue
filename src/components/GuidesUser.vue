<template>
  <div class="guides-user">
    <div class="user-info">
      <img class="photo" :src="useGetImageUrl(photo)" alt="" />
      <div class="user">
        <h4 class="name">{{ name }}</h4>
        <h6 class="prof">{{ prof }}</h6>
      </div>
    </div>
    <h6 class="date">
      {{
        "" +
        date.getDate() +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getFullYear()
      }}
    </h6>
  </div>
</template>

<script>
import { useGetImageUrl } from "../composables/useGetImageUrl";
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    prof: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  methods: {
    useGetImageUrl,
  },
};
</script>

<style scoped>
.guides-user {
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  justify-content: space-between;
}

.user-info {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
.user {
  display: flex;
  flex-direction: column;
}

.name {
  color: #575445;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 400;
}

.prof {
  color: #e6b939;
  font-size: 11px;

  font-weight: 400;
}

.date {
  color: #6f7278;
  font-size: 13px;
  font-weight: 400;
}
</style>
