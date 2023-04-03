/*
 Copyright (C) 2017 3NSoft Inc.

 This program is free software: you can redistribute it and/or modify it
 under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License,
 or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE.
 See the GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along with this program.
 If not, see <http://www.gnu.org/licenses/>..
*/

export const emojiGroups: {id: string, name: string}[] = [
  { id: '0', name: 'smilies' },
  { id: '1', name: 'gestures' },
  { id: '2', name: 'people and animals' },
  { id: '3', name: 'subjects' },
  { id: '4', name: 'symbols' },
];

export const emojiList: client3N.Emoji[] = [
  { groupId: '0', symbol: ':smiley:', note: 'smile' },
  { groupId: '0', symbol: ':laughing:', note: 'laughing' },
  { groupId: '0', symbol: ':wink:', note: 'wink' },
  { groupId: '0', symbol: ':blush:', note: 'blush' },
  { groupId: '0', symbol: ':heart_eyes:', note: 'heart-eyes' },
  { groupId: '0', symbol: ':kissing_heart:', note: 'kiss' },
  { groupId: '0', symbol: ':sunglasses:', note: 'cool' },
  { groupId: '0', symbol: ':joy:', note: 'crying with laughter' },
  { groupId: '0', symbol: ':open_mouth:', note: `i'm surprised` },
  { groupId: '0', symbol: ':sleeping:', note: 'sleeping' },
  { groupId: '0', symbol: ':worried:', note: 'sad' },
  { groupId: '0', symbol: ':unamused:', note: 'unamused' },
  { groupId: '0', symbol: ':weary:', note: 'weary' },
  { groupId: '0', symbol: ':disappointed:', note: 'disappointed' },
  { groupId: '0', symbol: ':cry:', note: 'cry' },
  { groupId: '0', symbol: ':rage:', note: 'rage' },
  { groupId: '0', symbol: ':imp:', note: 'imp' },
  { groupId: '0', symbol: ':innocent:', note: 'innocent' },
  { groupId: '0', symbol: ':heart:', note: 'heart' },
  { groupId: '0', symbol: ':broken_heart:', note: 'broken heart' },
  { groupId: '0', symbol: ':lips:', note: 'lips' },
  { groupId: '0', symbol: ':feet:', note: 'feet' },
  { groupId: '0', symbol: ':exclamation:', note: 'exclamation' },
  { groupId: '0', symbol: ':question:', note: 'question' },
  { groupId: '0', symbol: ':fire:', note: 'fire' },
  { groupId: '0', symbol: ':jack_o_lantern:', note: 'pumpkin' },
  { groupId: '0', symbol: ':ghost:', note: 'ghost' },
  { groupId: '0', symbol: ':santa:', note: 'santa' },
  { groupId: '0', symbol: ':skull:', note: 'skull' },
  { groupId: '1', symbol: ':thumbsup:', note: 'thumbsup' },
  { groupId: '1', symbol: ':thumbsdown:', note: 'thumbsdown' },
  { groupId: '1', symbol: ':ok_hand:', note: 'ok' },
  { groupId: '1', symbol: ':punch:', note: 'punch' },
  { groupId: '1', symbol: ':v:', note: 'victory' },
  { groupId: '1', symbol: ':clap:', note: 'clap' },
  { groupId: '1', symbol: ':pray:', note: 'pray' },
  { groupId: '1', symbol: ':muscle:', note: 'muscle' },
  { groupId: '1', symbol: ':metal:', note: 'metal' },
  { groupId: '2', symbol: ':runner:', note: 'runner' },
  { groupId: '2', symbol: ':couple:', note: 'couple' },
  { groupId: '2', symbol: ':family:', note: 'family' },
  { groupId: '2', symbol: ':boy:', note: 'boy' },
  { groupId: '2', symbol: ':girl:', note: 'girl' },
  { groupId: '2', symbol: ':man:', note: 'man' },
  { groupId: '2', symbol: ':woman:', note: 'woman' },
  { groupId: '2', symbol: ':older_man:', note: 'older man' },
  { groupId: '2', symbol: ':older_woman:', note: 'older woman' },
  { groupId: '2', symbol: ':cat2:', note: 'cat' },
  { groupId: '2', symbol: ':dog2:', note: 'dog' },
  { groupId: '2', symbol: ':hamster:', note: 'hamster' },
  { groupId: '2', symbol: ':wolf:', note: 'wolf' },
  { groupId: '2', symbol: ':tiger2:', note: 'tiger' },
  { groupId: '2', symbol: ':bear:', note: 'bear' },
  { groupId: '3', symbol: ':sunny:', note: 'sunny' },
  { groupId: '3', symbol: ':umbrella:', note: 'umbrella' },
  { groupId: '3', symbol: ':cloud:', note: 'cloud' },
  { groupId: '3', symbol: ':snowflake:', note: 'snowflake' },
  { groupId: '3', symbol: ':zap:', note: 'zap' },
  { groupId: '3', symbol: ':foggy:', note: 'foggy' },
  { groupId: '3', symbol: ':gift:', note: 'gift' },
  { groupId: '3', symbol: ':christmas_tree:', note: 'christmas_tree' },
  { groupId: '3', symbol: ':tada:', note: 'tada' },
  { groupId: '3', symbol: ':balloon:', note: 'balloon' },
  { groupId: '3', symbol: ':rose:', note: 'rose' },
  { groupId: '3', symbol: ':leaves:', note: 'leaves' },
  { groupId: '3', symbol: ':mushroom:', note: 'mushroom' },
  { groupId: '3', symbol: ':watch:', note: 'watch' },
  { groupId: '3', symbol: ':bell:', note: 'bell' },
  { groupId: '3', symbol: ':alarm_clock:', note: 'alarm clock' },
  { groupId: '3', symbol: ':moneybag:', note: 'moneybag' },
  { groupId: '3', symbol: ':credit_card:', note: 'credit card' },
  { groupId: '3', symbol: ':smoking:', note: 'smoking' },
  { groupId: '3', symbol: ':bomb:', note: 'bomb' },
  { groupId: '3', symbol: ':gun:', note: ':gun:' },
  { groupId: '3', symbol: ':date:', note: 'calendar' },
  { groupId: '3', symbol: ':soccer:', note: 'football' },
  { groupId: '3', symbol: ':tennis:', note: 'tennis' },
  { groupId: '3', symbol: ':book:', note: 'book' },
  { groupId: '3', symbol: ':guitar:', note: 'guitar' },
  { groupId: '3', symbol: ':coffee:', note: 'coffee' },
  { groupId: '3', symbol: ':beer:', note: 'beer' },
  { groupId: '3', symbol: ':cocktail:', note: 'cocktail' },
  { groupId: '3', symbol: ':pizza:', note: 'pizza' },
  { groupId: '3', symbol: ':hamburger:', note: 'hamburger' },
  { groupId: '3', symbol: ':sushi:', note: 'sushi' },
  { groupId: '3', symbol: ':ice_cream:', note: 'ice cream' },
  { groupId: '3', symbol: ':birthday:', note: 'birthday' },
  { groupId: '3', symbol: ':cake:', note: 'cake' },
  { groupId: '3', symbol: ':apple:', note: 'apple' },
  { groupId: '3', symbol: ':lemon:', note: 'lemon' },
  { groupId: '3', symbol: ':watermelon:', note: 'watermelon' },
  { groupId: '3', symbol: ':strawberry:', note: 'strawberry' },
  { groupId: '4', symbol: ':heavy_dollar_sign:', note: 'dollar' },
  { groupId: '4', symbol: ':copyright:', note: 'copyright' },
  { groupId: '4', symbol: ':registered:', note: 'registered' },
  { groupId: '4', symbol: ':tm:', note: 'trade mark' },
  { groupId: '4', symbol: ':wavy_dash:', note: 'wavy dash' },
  { groupId: '4', symbol: ':heavy_check_mark:', note: 'check mark' },
  { groupId: '4', symbol: ':underage:', note: 'underage' },
  { groupId: '4', symbol: ':sos:', note: 'sos' },
];
