<script lang="ts">
  //https://cdn.discordapp.com/attachments/581018943041306641/1168586424023527484/csvjson.json
  import { onMount } from "svelte";
  let feedback: {
    timestamp: string;
    name: string;
    career: string;
    education: string;
    company: string;
    score: string;
    Do_you_think_our_teaching_is_worth_the_money: string;
    surname: string;
    find_us: string;
  };
  let datas: any = [];
  onMount(async () => {
    const res = await fetch(
      `https://ppythonbasic.github.io/feedback/feedback.json`
    );
    datas = await res.json();
  });
</script>

<svelte:head>
  <title>การตอบรับ</title>
</svelte:head>
<div class="m-12">
  <h1 class="text-3xl text-center"><b>การตอบรับจากผู้เรียน</b></h1>
</div>
<div class="flex flex-wrap gap-4 justify-center items-center">
  {#each datas as item}
    <div class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body">
        <span class="flex justify-between">
          <h2 class="card-title">{item.name} {item.surname}</h2>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src="https://robohash.org/{item.name}+{item.surname}"
            alt="image-profile"
            class="w-20"
          />
        </span>
        <p>อาชีพ : {item.career}</p>
        <p>ระดับการศึกษา : {item.education}</p>
        <p>สถานศึกษา : {item.company}</p>
        <p>ให้คะแนนการสอน : {item.score}/10</p>
      </div>
    </div>
  {/each}
</div>
