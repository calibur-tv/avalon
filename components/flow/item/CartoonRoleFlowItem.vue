<style lang="scss">
.cartoon-role-flow-item {
  position: relative;
  margin-top: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  &:first-of-type {
    .top:before {
      color: goldenrod;
      font-size: 28px;
      line-height: 44px;
    }
  }

  &:nth-of-type(2) {
    .top:before {
      color: indianred;
      font-size: 22px;
      line-height: 44px;
    }
  }

  &:nth-of-type(3) {
    .top:before {
      color: silver;
      font-size: 16px;
      line-height: 44px;
    }
  }

  .top {
    position: relative;
    display: block;
    float: right;

    &:before {
      content: attr(data-index);
      line-height: 48px;
    }
  }

  .avatar {
    float: left;
    overflow: hidden;
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid $color-gray-normal;
    font-size: 0;
  }

  .summary {
    overflow: hidden;
    height: 100px;

    .role {
      display: block;
      font-size: 14px;
      line-height: 20px;
      height: 60px;
      overflow: hidden;

      .name {
        font-weight: bold;
      }

      .intro {
        color: #000;
      }
    }

    .lover {
      height: 20px;
      line-height: 20px;
      vertical-align: middle;
      font-size: 13px;
      color: $color-text-normal;
      margin-top: 15px;
      margin-right: 5px;

      .image {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }

  .footer {
    height: 44px;
    line-height: 44px;

    .bangumi {
      color: #999;
      font-size: 12px;
      overflow: hidden;
      margin-right: 8px;
    }

    .stats {
      text-align: right;
      color: #666;
      float: right;

      span {
        margin-left: 10px;
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
}
</style>

<template>
  <li class="cartoon-role-flow-item">
    <a :href="$alias.cartoonRole(item.id)" target="_blank" class="avatar">
      <v-img :src="item.avatar" width="98" height="98" />
    </a>
    <div class="summary">
      <a :href="$alias.cartoonRole(item.id)" target="_blank" class="role">
        <span class="name" v-text="item.name" />
        <span class="intro">：{{ item.intro }}</span>
      </a>
      <div v-if="item.lover" class="lover fr">
        <span>守护者：</span>
        <user-card :id="+item.lover.id" :zone="item.lover.zone">
          <span v-text="item.lover.nickname" />
          <v-img
            :src="item.lover.avatar"
            width="20"
            height="20"
            :avatar="true"
            class="image"
          />
        </user-card>
      </div>
      <div v-else class="lover" />
    </div>
    <div class="footer">
      <div v-if="userZone" class="stats">
        <span>粉丝: {{ item.fans_count }}</span>
        ·
        <span>团子: {{ item.star_count }}</span>
        ·
        <span>贡献: {{ item.has_star }}</span>
      </div>
      <div v-else class="stats">
        <span>
          粉丝:
          {{ $utils.shortenNumber(item.fans_count) }}
        </span>
        <span>
          团子:
          {{ $utils.shortenNumber(item.star_count) }}
        </span>
        <template v-if="!bangumiId && index !== -1">
          <span>排名:</span>
          <span :data-index="item.fans_count ? index + 1 : '无'" class="top" />
        </template>
      </div>
      <a
        :href="$alias.bangumi(item.bangumi.id)"
        class="bangumi"
        target="_blank"
        v-text="item.bangumi.name"
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'CartoonRoleFlowItem',
  props: {
    item: {
      required: true,
      type: Object
    },
    bangumiId: {
      type: [Number, String],
      default: 0
    },
    userZone: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: -1
    }
  }
}
</script>
