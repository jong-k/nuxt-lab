<template>
  <div>
    <div>
      <h2>Composable Test</h2>
      <h2>one: {{ one }}</h2>
      <h2>four: {{ four }}</h2>
      <h2>zero: {{ zero }}</h2>
      <h2>777: {{ myNumber }}</h2>
    </div>
    <div>
      <h2>Util Test</h2>
      <h2>seven: {{ seven }}</h2>
      <h2>ten: {{ ten }}</h2>
      <pre>{{ numberGroup }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const one = useSum(0, 1);
const four = useMultiply(2, 2);
const zero = useMinus(5, 5);
const myNumber = useMyNumber();

const seven = sum(2, 5);
const ten = multiply(1, 10);
const numberGroup = ref<AppMath.NumberGroup>({ one: 1, two: 2 });

onMounted(() => {
  numberGroup.value.one = 11111;
  numberGroup.value.two = 22222;
});
</script>
