"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Ping } from "./constant";
import { PingGroup } from "./hooks/usePingDex";
import PingCard from "./PingCard";

interface Props {
  group: PingGroup;
  isFirstGroup?: boolean;
  onOpenDetail: (ping: Ping) => void;
}

const GroupHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 6px 4px 12px;
  scroll-margin-top: 180px;
`;

const GroupTitle = styled.span`
  font-family: var(--font-jua), sans-serif;
  font-size: 21px;
  color: #ff77ab;
`;

const GroupCount = styled.span`
  font-size: 13px;
  color: #c98aa6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(142px, 1fr));
  gap: 14px;
  margin-bottom: 26px;
`;

export default function ResultGroup({
  group,
  isFirstGroup = false,
  onOpenDetail,
}: Props) {
  return (
    <div>
      <GroupHeader data-anchor={group.anchor}>
        <GroupTitle>{group.title}</GroupTitle>
        <GroupCount>{group.count}마리</GroupCount>
      </GroupHeader>
      <Grid>
        {group.items.map((ping, index) => {
          const aboveFold = isFirstGroup && index < 5;
          return aboveFold ? (
            <PingCard
              key={ping.img}
              ping={ping}
              priority
              onClick={() => onOpenDetail(ping)}
            />
          ) : (
            <motion.div
              key={ping.img}
              initial={{ opacity: 0, translateY: -10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <PingCard ping={ping} onClick={() => onOpenDetail(ping)} />
            </motion.div>
          );
        })}
      </Grid>
    </div>
  );
}
