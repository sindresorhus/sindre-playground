import test from 'ava';
import delay from 'delay';
import m from './';

test('unicorn', async t => {
	await delay(300);
	t.true(m);
});

test('rainbow', async t => {
	await delay(100);
	t.true(m);
});
